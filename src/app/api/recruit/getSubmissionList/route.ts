import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, LoginResult, LoginUser} from "@/util/Interface";
import {corsHeader} from "@/util/CorsUtil";
import {checkLogin, getRecruitSubmissionList} from "@/util/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function POST(req: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const loginBody: LoginUser = JSON.parse(await req.text());
    const loginResult: LoginResult = await checkLogin(loginBody);
    if(loginResult !== LoginResult.LOGIN_OK) {
        apiResult.RESULT_CODE = 100
        apiResult.RESULT_MSG = "Unauthorized"
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    const submissionList = await getRecruitSubmissionList();
    if(submissionList === undefined || submissionList.data.length == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    apiResult.RESULT_DATA = submissionList;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}