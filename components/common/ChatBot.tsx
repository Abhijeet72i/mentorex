// components/common/ChatBot.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { subjects } from "@/data/subjects";
import { countries } from "@/data/countries";

interface ChatMessage {
  from: "bot" | "user";
  text: string;
  links?: { label: string; href: string }[];
}

const quickReplies = [
  "What subjects do you teach?",
  "What countries do you serve?",
  "How much does it cost?",
  "How do I contact you?",
  "How do I book a free demo?",
];

const initialMessages: ChatMessage[] = [
  { from: "bot", text: "Hi! I'm the Mentorex assistant. Ask me about subjects, pricing, countries, or how to get in touch." },
];

function getBotResponse(input: string): ChatMessage {
  const q = input.toLowerCase();

  if (q.includes("subject") || q.includes("teach") || q.includes("course")) {
    return {
      from: "bot",
      text: `We teach ${subjects.map((s) => s.title).join(", ")} — from Kindergarten through university level.`,
      links: [{ label: "View all programs", href: "/programs" }],
    };
  }

  if (q.includes("countr") || q.includes("where") || q.includes("location")) {
    return {
      from: "bot",
      text: `We currently teach students in ${countries.map((c) => c.name).join(", ")}.`,
      links: [{ label: "See country details", href: "/countries" }],
    };
  }

  if (q.includes("price") || q.includes("cost") || q.includes("fee") || q.includes("charge")) {
    return {
      from: "bot",
      text: "Pricing depends on your grade level and country — sessions range roughly from $7-$15 per hour. Every student also gets a free 30-minute demo session first.",
      links: [{ label: "See full pricing", href: "/services" }],
    };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("call") || q.includes("whatsapp")) {
    return {
      from: "bot",
      text: "You can reach us at mentorexglobal@gmail.com or +91 70184 24491 — or use the WhatsApp button in the bottom-right corner for a quick chat.",
      links: [{ label: "Contact page", href: "/contact" }],
    };
  }

  if (q.includes("demo") || q.includes("book") || q.includes("trial") || q.includes("free")) {
    return {
      from: "bot",
      text: "Every new student gets a free 30-minute demo session before their first paid booking. You can book one directly through our contact form.",
      links: [{ label: "Book your free demo", href: "/contact" }],
    };
  }

  if (q.includes("web design") || q.includes("website") || q.includes("seo") || q.includes("customer care") || q.includes("business")) {
    return {
      from: "bot",
      text: "Besides tutoring, we also offer web design, customer care outsourcing, and SEO services for businesses.",
      links: [{ label: "View business services", href: "/services" }],
    };
  }

  return {
    from: "bot",
    text: "I'm not sure about that one — but our team can help directly. Try one of the topics below, or reach us on WhatsApp or the contact form.",
    links: [{ label: "Contact us", href: "/contact" }],
  };
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { from: "user", text };
    const botMsg = getBotResponse(text);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function resetChat() {
    setMessages(initialMessages);
    setInput("");
  }

  const lastMessage = messages[messages.length - 1];
  const showQuickReplies = lastMessage?.from === "bot";

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label="Open chat assistant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 shadow-lg shadow-black/20"
      >
        {open ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const}}
            className="fixed bottom-24 left-6 z-[90] flex h-[480px] w-[340px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-neutral-900 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">Mentorex Assistant</p>
                <p className="text-xs text-neutral-400">Ask about subjects, pricing, or contact info</p>
              </div>
              <button
                onClick={resetChat}
                aria-label="Restart conversation"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.from === "user" ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-800"}`}>
                    <p>{msg.text}</p>
                    {msg.links && (
                      <div className="mt-2 flex flex-col gap-1.5">
                        {msg.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-neutral-900 shadow-sm transition-colors duration-300 hover:bg-neutral-50"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {showQuickReplies && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-700 transition-colors duration-300 hover:border-neutral-900 hover:text-neutral-900"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-neutral-100 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 rounded-full border border-neutral-200 px-4 py-2.5 text-sm outline-none transition-colors duration-300 focus:border-neutral-900"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors duration-300 hover:bg-neutral-800"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}