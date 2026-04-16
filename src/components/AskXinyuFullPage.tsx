"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  { text: "What's your design philosophy in a nutshell?" },
  { text: "How do you approach AI product design differently?" },
  { text: "What's the most complex system you've designed end-to-end?" },
  { text: "How do you balance deep research with shipping fast?" },
  { text: "What are you most excited about right now?" },
  { text: "What would your colleagues say about working with you?" },
];

export default function AskXinyuFullPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setInput("");
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Request failed" }));
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: err.error ?? "Something went wrong.",
          },
        ]);
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) return;

      const assistantId = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: m.content + chunk }
              : m,
          ),
        );
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid #e5e5e5" }}
      >
        <Link
          href="/"
          className="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          &larr; Back to Portfolio
        </Link>
        <span className="text-xs text-text-muted">
          Curious about my work? Let&rsquo;s chat.
        </span>
      </div>

      {/* Chat body */}
      <div className="flex-1 overflow-y-auto">
        {!hasMessages ? (
          <div className="h-full flex flex-col items-center justify-center px-6">
            <div className="max-w-xl w-full">
              <h1 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-3">
                Ask Xinyu
              </h1>
              <p className="text-sm text-text-muted text-center mb-10 max-w-md mx-auto">
                Hey! I&rsquo;m an AI version of Xinyu. Ask me anything about my work,
                design thinking, or what it&rsquo;s like designing enterprise AI products.
              </p>

              <div className="mb-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(input);
                  }}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What are you curious about?"
                    className="flex-1 rounded-lg px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-1 focus:ring-text-muted"
                    style={{
                      border: "1px solid #e5e5e5",
                      backgroundColor: "#ffffff",
                    }}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg transition-opacity disabled:opacity-30"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#fafafa",
                      border: "none",
                    }}
                    aria-label="Send"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                </form>
              </div>

              <div>
                <p
                  className="font-mono uppercase mb-3"
                  style={{
                    fontSize: "11px",
                    color: "#999",
                    letterSpacing: "0.05em",
                  }}
                >
                  Good places to start
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.text}
                      onClick={() => handleSubmit(s.text)}
                      className="text-sm text-left rounded-lg px-4 py-3 transition-colors hover:bg-white"
                      style={{
                        color: "#555",
                        border: "1px solid #e5e5e5",
                        background: "transparent",
                      }}
                    >
                      {s.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto w-full px-6 py-6">
            <div className="flex flex-col gap-5">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] rounded-xl px-5 py-3.5 text-sm leading-relaxed"
                    style={
                      m.role === "user"
                        ? { backgroundColor: "#1a1a1a", color: "#fafafa" }
                        : {
                            backgroundColor: "#ffffff",
                            border: "1px solid #e5e5e5",
                            color: "#555",
                          }
                    }
                  >
                    <MessageContent text={m.content} />
                  </div>
                </div>
              ))}
              {isLoading &&
                messages[messages.length - 1]?.role === "user" && (
                  <div className="flex justify-start">
                    <div
                      className="rounded-xl px-5 py-3.5"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e5e5e5",
                      }}
                    >
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>

      {/* Fixed bottom input (conversation mode) */}
      {hasMessages && (
        <div
          className="flex-shrink-0 px-6 py-4"
          style={{ borderTop: "1px solid #e5e5e5" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(input);
            }}
            className="max-w-2xl mx-auto flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a follow-up or change the topic..."
              className="flex-1 rounded-lg px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-1 focus:ring-text-muted"
              style={{
                border: "1px solid #e5e5e5",
                backgroundColor: "#ffffff",
              }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg transition-opacity disabled:opacity-30"
              style={{
                backgroundColor: "#1a1a1a",
                color: "#fafafa",
                border: "none",
              }}
              aria-label="Send"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function MessageContent({ text }: { text: string }) {
  if (!text) return null;

  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <div className="flex flex-col gap-2">
      {paragraphs.map((p, i) => {
        const lines = p.split("\n");
        return (
          <div key={i}>
            {lines.map((line, j) => {
              const boldProcessed = line.replace(
                /\*\*(.*?)\*\*/g,
                (_, content: string) => `<strong>${content}</strong>`,
              );
              return (
                <p
                  key={j}
                  className="m-0"
                  dangerouslySetInnerHTML={{ __html: boldProcessed }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
