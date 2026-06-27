'use client';

import { useState } from 'react';
import ChatAssistant from './ChatAssistant';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div aria-live="polite">
      <div className="fixed bottom-4 right-4 z-[60] hidden flex-col items-end sm:flex">
        <div
          id="chat-widget"
          role="dialog"
          aria-modal="false"
          className={`w-[min(92vw,22rem)] transform transition-all duration-200 ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-3 opacity-0 pointer-events-none'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="rounded-[24px] border border-slate-200/80 bg-white/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur">
            <ChatAssistant />
          </div>
        </div>

        <button
          aria-expanded={open}
          aria-controls="chat-widget"
          onClick={() => setOpen((s) => !s)}
          className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-brand-charcoal text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
          title={open ? 'Close chat' : 'Open chat'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end bg-black/45 sm:hidden">
          <div className="absolute inset-0" onClick={() => setOpen(false)} />
          <div className="relative w-full max-h-[85dvh] overflow-hidden rounded-t-[28px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="text-sm font-semibold text-brand-charcoal">Portfolio assistant</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-brand-charcoal hover:bg-brand-muted/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-3 pb-3">
              <div className="max-h-[72dvh] overflow-y-auto">
                <ChatAssistant />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
