import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

 // -> 'en-US'


// import { NextResponse } from 'next/server'
 
// let locales = ['en', 'es', 'pt']
 
// // Get the preferred locale, similar to above or using a library
// function getLocale(request) { 
//   let headers = { 'accept-language': 'en-US,en;q=0.5' }
//   let languages = new Negotiator({ headers }).languages()
//   let defaultLocale = 'en'
//   console.log(languages, headers);
//   return match(languages, locales, defaultLocale)
// }
 
// export function middleware(request) {
//   // Check if there is any supported locale in the pathname
//   const pathname = request.nextUrl.pathname
//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )
 
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)
 
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(
//       new URL(`/${locale}/${pathname}`, request.url)
//     )
//   }
// }
 
// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     // '/((?!_next).*)',
//     '/((?!api|_next|.*\\..*).*)'
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// }

import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'pt'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};