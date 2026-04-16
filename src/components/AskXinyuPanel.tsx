"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type SuggestedQuestion = {
  text: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  suggestions: SuggestedQuestion[];
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function AskXinyuPanel({ open, onClose, suggestions }: Props) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

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

  const panelContent = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9990] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-[9991] h-full w-full sm:w-[420px] flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{
          backgroundColor: "#fafafa",
          borderLeft: "1px solid #e5e5e5",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <div>
            <h2 className="font-serif text-lg font-semibold text-text-primary">
              Ask Xinyu
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Curious about my work? Let&rsquo;s chat.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {messages.length === 0 ? (
            <div className="flex flex-col gap-5">
              <div
                className="rounded-xl p-4"
                style={{
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#ffffff",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                  Hey! I&rsquo;m an AI version of Xinyu — happy to chat about
                  my work, design philosophy, or anything you&rsquo;re curious
                  about. Ask me anything and I&rsquo;ll give you a real answer.
                </p>
              </div>

              {suggestions.length > 0 && (
                <div className="flex flex-col gap-3">
                  <p
                    className="font-mono uppercase"
                    style={{
                      fontSize: "11px",
                      color: "#999",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Good places to start
                  </p>
                  <div className="flex flex-col gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s.text}
                        onClick={() => handleSubmit(s.text)}
                        className="text-sm text-left rounded-lg px-4 py-2.5 transition-colors hover:bg-white"
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
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed"
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
                      className="rounded-xl px-4 py-3"
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
          )}
        </div>

        {/* Input */}
        <div className="px-5 py-3" style={{ borderTop: "1px solid #e5e5e5" }}>
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
              className="flex-1 rounded-lg px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:ring-1 focus:ring-text-muted"
              style={{
                border: "1px solid #e5e5e5",
                backgroundColor: "#ffffff",
              }}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-opacity disabled:opacity-30"
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
      </div>
    </>
  );

  if (!mounted) return null;

  return createPortal(panelContent, document.body);
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
