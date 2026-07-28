import { NextResponse, type NextRequest } from "next/server";

/**
 * Cover-letter URL normalisation.
 *
 *   /?cl=my_slug  ->  /cl/my-slug
 *   /cl/my_slug   ->  /cl/my-slug
 *
 * The canonical shape is /cl/<slug>. The `?cl=` form is supported because it's
 * the shape the old site used, and links already in the wild should keep working.
 * Done in middleware rather than next.config redirects so the original query
 * string isn't carried through to the destination.
 */
const slugify = (value: string) => value.trim().toLowerCase().replace(/_/g, "-");

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/") {
    const cl = searchParams.get("cl");
    if (cl) {
      const url = request.nextUrl.clone();
      url.pathname = `/cl/${slugify(cl)}`;
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  if (pathname.startsWith("/cl/")) {
    const canonical = `/cl/${slugify(pathname.slice("/cl/".length))}`;
    if (canonical !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = canonical;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/cl/:path*"],
};
