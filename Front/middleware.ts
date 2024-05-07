// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   secret: process.env.NEXTAUTH_SECRET,
  
// });
// export const config = {
//   matcher: ["/dashboard/:path*"],
// };


//-----------------------------------------------------------------------------------
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from 'next/server'
// import acceptLanguage from 'accept-language'
// import { fallbackLng, languages } from '@/i18n/settings'

// acceptLanguage.languages(languages)

// // export const config = {
// //   // matcher: '/:lng*'
// //   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// // }

// const cookieName = process.env.I18N_COOKIE_NAME as string
// const searchParamName = 'lng'


// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
  
//   function middleware(req) {
//     if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()

//     let lngInSearchParams, lngInCookie, lngInAcceptHeader
//     if (req.nextUrl.searchParams.has(searchParamName)) lngInSearchParams = acceptLanguage.get(req.nextUrl.searchParams.get(searchParamName))
//     if (req.cookies.has(cookieName)) lngInCookie = acceptLanguage.get(req.cookies.get(cookieName)!.value)
//     lngInAcceptHeader = acceptLanguage.get(req.headers.get('Accept-Language'))
//     const lng = lngInSearchParams || lngInCookie || lngInAcceptHeader || fallbackLng

//     const response = NextResponse.next()
//     if (lngInCookie !== lng) {
//       response.cookies.set(cookieName, lng)
//     }
//   },
//   {
//     secret: process.env.NEXTAUTH_SECRET,
//     // callbacks: {
//     //   authorized: ({ token }) => token?.role === "admin",
//     // },
//   }
// )

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
//-----------------------------------------------------------------------------------

import { chain } from '@/middlewares/chain'
import { withAuthMiddleware } from '@/middlewares/auth'
import { withI18nMiddleware } from '@/middlewares/i18n'

export default chain([withAuthMiddleware, withI18nMiddleware ])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

