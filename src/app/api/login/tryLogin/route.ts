import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, LoginResult, LoginUser} from "@/util/Interface";
import {corsHeader} from "@/util/CorsUtil";
import {tryLogin} from "@/util/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function POST(req: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    };

    const loginBody: LoginUser = JSON.parse(await req.text());
    const loginResult: LoginResult = await tryLogin(loginBody);
    apiResult.RESULT_DATA = loginResult;

    if(loginResult === LoginResult.LOGIN_OK){
        apiResult.RESULT_CODE = 200
    }else if(loginResult === LoginResult.LOGIN_FAIL_NO_ACCOUNT
        || loginResult === LoginResult.LOGIN_FAIL_PASSWORD){
        apiResult.RESULT_CODE = 100
        apiResult.RESULT_MSG = "Failed to Login"
    }

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}