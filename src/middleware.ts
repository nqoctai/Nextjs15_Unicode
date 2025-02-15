import { NextRequest, NextResponse } from "next/server";


export const middleware = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith("/gioi-thieu")) {
        return NextResponse.rewrite(new URL("/about", request.url));
    }
    if (pathname.startsWith("/san-pham")) {
        const productsURL = request.url;
        const result = productsURL.match(/[0-9]+$/i);
        if (result) {
            const productID = parseInt(result[0]);
            console.log(productID);
            return NextResponse.rewrite(new URL(`/products/${productID}`, request.url));
        }
        return NextResponse.rewrite(new URL("/products", request.url));
    }
};

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
};