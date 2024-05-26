import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isAbout = request.url.includes('about')
  const isAuth = true

  if (isAbout) {
    if (isAuth) {
      return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
