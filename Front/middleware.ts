import { chain } from '@/middlewares/chain'
import { withAuthMiddleware } from '@/middlewares/auth'
import { withI18nMiddleware } from '@/middlewares/i18n'

export default chain([withAuthMiddleware, withI18nMiddleware ])

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

