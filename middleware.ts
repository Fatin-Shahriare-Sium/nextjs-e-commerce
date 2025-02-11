import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let { nextUrl } = request;

  const hasToken = request.cookies.has("comm_token");
  console.log("middleware", request.nextUrl.pathname, hasToken);
  if (request.nextUrl.pathname == "/login" || request.nextUrl.pathname == "/signup") {
    if (hasToken) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }
  if (hasToken && request.nextUrl.pathname.startsWith("/user")) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/user/:path*", "/login", "/signup"],
};
