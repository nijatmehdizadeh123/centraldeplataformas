'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { isBrowserCrawler } from '@/lib/isCrawler';

const STORAGE_KEY = 'cdp-cookie-consent';

export type ConsentValue = 'accepted' | 'rejected';

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function subscribeConsent(onStoreChange: () => void) {
  window.addEventListener('cdp-consent', onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener('cdp-consent', onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function applyConsent(value: ConsentValue) {
  const granted = value === 'accepted' ? 'granted' : 'denied';
  window.localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent('cdp-consent', { detail: value }));

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
      analytics_storage: granted,
    });
  }
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribeConsent, getStoredConsent, () => null as ConsentValue | null);
  const crawler = useSyncExternalStore(
    () => () => undefined,
    isBrowserCrawler,
    () => false
  );

  if (consent || crawler) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[200] border-t border-[#d4af37]/20 bg-black/95 p-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-white/70">
          Utilizamos cookies para o funcionamento do site e, com o seu consentimento, para estatísticas e publicidade (incluindo Google Ads).
          Consulte a{' '}
          <Link href="/privacidade" className="text-primary hover:underline">política de privacidade</Link>
          {' '}e a{' '}
          <Link href="/cookies" className="text-primary hover:underline">política de cookies</Link>.
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={() => applyConsent('rejected')}
            className="rounded-xl border border-white/20 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => applyConsent('accepted')}
            className="btn-gradient rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
