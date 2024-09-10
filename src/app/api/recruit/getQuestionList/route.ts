import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, LoginResult, LoginUser} from "@/util/Interface";
import {corsHeader} from "@/util/CorsUtil";
import {checkLogin, getRecruitSubmissionList} from "@/util/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}