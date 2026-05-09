import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware runs on every request that matches the `matcher` config below.
//
// Common use-cases:
//   - Authentication: redirect unauthenticated users to /login
//   - Internationalisation: detect locale and rewrite the URL
//   - Security headers: add CSP, HSTS, etc. to every response
//   - Feature flags: conditionally serve different content
//
// Example — protect all routes under /dashboard:
//
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     const token = request.cookies.get('token');
//     if (!token) {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//   }

// The request parameter is unused in the base implementation but available for
// custom middleware logic (auth, i18n, redirects, etc.).
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Security headers applied to every response.
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
