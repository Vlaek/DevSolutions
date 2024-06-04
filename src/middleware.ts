import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from './navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'ru',
})

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}

// import createMiddleware from 'next-intl/middleware'

// export default createMiddleware({
//   locales: ['ru', 'en'],

//   defaultLocale: 'ru',

//   pathnames: {
//     '/': {
//       ru: '/',
//       en: 'en/',
//     },

//     '/services': {
//       ru: '/services',
//       en: '/services',
//     },
//   },
// })

// export const config = {
//   matcher: ['/', '/([\\w-]+)?/services/ '],
// }

// import { NextRequest, NextResponse } from 'next/server'

// const PUBLIC_FILE = /\.(.*)$/

// export function middleware(request: NextRequest) {
//   const shouldHandleLocale =
//     !PUBLIC_FILE.test(request.nextUrl.pathname) &&
//     !request.nextUrl.pathname.includes('/api/') &&
//     request.nextUrl.locale === 'default'

//   return shouldHandleLocale ? NextResponse.redirect(`/en${request.nextUrl.pathname}`) : undefined
// }
