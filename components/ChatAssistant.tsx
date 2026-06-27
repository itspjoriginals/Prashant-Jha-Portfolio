'use client';

import { useState } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi, I’m Prashant’s portfolio assistant. Ask me about his work, skills, projects, or contact details." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    const question = input.trim();
    if (!question || isLoading) return;

    const userMessage = { role: 'user' as const, content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      });

      const result = await response.json();
      const assistantMessage = {
        role: 'assistant' as const,
        content: typeof result?.answer === 'string' && result.answer.trim()
          ? result.answer
          : 'I don’t have that information in Prashant’s portfolio context yet.'
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'I’m having trouble answering that right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      void handleSend();
    }
  };

  return (
    <section id="assistant" className="flex h-full flex-col rounded-[24px] border border-slate-200/80 bg-white/95 p-3 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
      <div className="mb-3 flex items-center justify-between gap-3 rounded-[20px] bg-brand-charcoal px-3 py-3 text-white">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-brand-accent">Portfolio assistant</p>
          <p className="mt-1 text-[12px] leading-5 text-white/90">Ask about Prashant’s background, projects, or contact details.</p>
        </div>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]">Gemini</span>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto pb-2">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === 'assistant' ? 'bg-slate-50 text-slate-800' : 'bg-brand-charcoal text-white'}`}
          >
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <form
        className="mt-3 flex flex-col gap-2 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          void handleSend();
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="inline-flex h-10 items-center justify-center rounded-2xl bg-brand-charcoal px-4 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isLoading ? 'Thinking…' : 'Send'}
        </button>
      </form>
      <p className="mt-2 text-[11px] text-slate-500">Press Enter to send, or use Shift+Enter for a new line.</p>
    </section>
  );
}
