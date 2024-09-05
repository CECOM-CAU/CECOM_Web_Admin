import {NextRequest, NextResponse} from "next/server";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
    return NextResponse.json({ status: 200 });
}