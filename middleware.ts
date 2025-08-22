import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|sitemap.xml|robots.txt|offline|_next/image|images|favicons|splashscreens|auth/:path*|favicon.ico|sw.*.js|work.*.js|fallback.*.js).*)",
  ],
};
