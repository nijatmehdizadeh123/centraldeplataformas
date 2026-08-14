'use client';

import { useSyncExternalStore } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { getStoredConsent, subscribeConsent, type ConsentValue } from '@/components/CookieBanner';

function getConsentSnapshot(): ConsentValue | null {
  return getStoredConsent();
}

export default function AnalyticsGate() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => null);
  if (consent !== 'accepted') return null;
  return <Analytics />;
}
