import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    const keyword = await request.nextUrl.searchParams.get("keyword");
    return NextResponse.json({
        success: true,
        message: "Hello Word",
        data: {
            keyword
        }
    })
}

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    return NextResponse.json({
        success: true,
        message: "Created successfully",
        data: body
    })
}