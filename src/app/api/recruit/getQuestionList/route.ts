import {NextRequest, NextResponse} from "next/server";
import {API_RESULT, LoginResult, LoginUser} from "@/util/Interface";
import {corsHeader} from "@/util/CorsUtil";
import {checkLogin, getRecruitQuestionList, getRecruitSubmissionList} from "@/util/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const questionList = await getRecruitQuestionList();
    if(questionList === undefined || questionList.count == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    apiResult.RESULT_DATA = questionList;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}