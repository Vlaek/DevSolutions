import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from './navigation'
import { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales,
    localePrefix,
    defaultLocale: 'ru',
    localeDetection: false,
  })
  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
