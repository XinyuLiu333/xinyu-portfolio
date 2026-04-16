import type { Metadata } from "next";
import AskXinyuFullPage from "@/components/AskXinyuFullPage";

export const metadata: Metadata = {
  title: "Ask Xinyu — AI Proxy",
  description:
    "Ask an AI proxy about Xinyu Liu's design leadership, work, and approach. Answers grounded in real projects.",
};

export default function AskPage() {
  return <AskXinyuFullPage />;
}
