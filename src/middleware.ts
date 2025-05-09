import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Chỉ áp dụng middleware cho các route động
  matcher: ['/((?!api|_next|.*\..*).*)'],
};