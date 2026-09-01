// src/proxy.ts
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlProxy = createMiddleware(routing);

export function proxy(request: NextRequest) {
  // You can execute custom server-side logic here

  return intlProxy(request); // Hand off request to next-intl
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
