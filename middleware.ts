import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get the token and verify it
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })
  
  const isAuth = !!token
  
  // Public routes that don't require authentication
  const publicRoutes = ['/auth/signin', '/auth/signup', '/']
  const isPublicRoute = publicRoutes.includes(pathname)

  // Auth page handling - redirect authenticated users
  if (pathname.startsWith('/auth') && isAuth) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Protected routes handling
  if (!isAuth && !isPublicRoute) {
    const redirectUrl = new URL('/auth/signin', request.url)
    redirectUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - static files
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}