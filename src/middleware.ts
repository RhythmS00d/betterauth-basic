import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("better-auth.session_token");

  const isAuthenticated = !!cookie;
  const { pathname } = request.nextUrl;

  if (!isAuthenticated && pathname.startsWith("/dashboard")) {
    // If the user is not authenticated, redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
