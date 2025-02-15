import { NextRequest, NextResponse } from "next/server"

interface ParamType {
    params: {
        id: string
    }
}

export const GET = async (request: NextRequest, { params }: ParamType) => {
    const { id } = await params;
    return NextResponse.json({
        success: true,
        data: {
            id,
            name: "Ngoc Tai"
        }
    })
} 