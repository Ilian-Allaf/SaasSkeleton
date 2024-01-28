import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/i18n/settings'
import { CustomMiddleware } from './chain'

acceptLanguage.languages(languages)
const cookieName = process.env.NEXT_PUBLIC_I18N_COOKIE_NAME as string
const searchParamName = 'lng'

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    req: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()

    let lngInSearchParams, lngInCookie, lngInAcceptHeader
    if (req.nextUrl.searchParams.has(searchParamName)) lngInSearchParams = acceptLanguage.get(req.nextUrl.searchParams.get(searchParamName))
    if (req.cookies.has(cookieName)) lngInCookie = acceptLanguage.get(req.cookies.get(cookieName)?.value)
    lngInAcceptHeader = acceptLanguage.get(req.headers.get('Accept-Language'))
    const lng = lngInSearchParams || lngInCookie || lngInAcceptHeader || fallbackLng
    
    if (lngInCookie !== lng) {
      response.cookies.set(cookieName, lng)
    }

    return middleware(req, event, response)
  }
}