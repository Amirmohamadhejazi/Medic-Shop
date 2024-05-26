import { type NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
    const baseUrl = new URL('/', request.url).href
    if (request.url === baseUrl) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}
export const config = {
    matcher: ['/((?!_next/static|_next/image|images|icons|fonts|favicon.ico).*)'],
}
