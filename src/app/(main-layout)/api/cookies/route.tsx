import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
    const cookies = request.nextUrl.searchParams.get("name");

}