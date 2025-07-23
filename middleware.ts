import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Only protect admin routes, not API routes
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    // Check for session cookie or debug cookie
    const sessionCookie = request.cookies.get('ecolopack-cms-session')
    const debugCookie = request.cookies.get('cms-debug-auth')
    
    if (!sessionCookie && !debugCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*'
}