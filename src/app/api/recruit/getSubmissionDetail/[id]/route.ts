import {NextRequest, NextResponse} from "next/server";
import {API_RESULT} from "@/util/Interface";
import {corsHeader} from "@/util/CorsUtil";
import {getRecruitSubmissionDetail} from "@/util/FirebaseUtil";

export const dynamic = "force-dynamic";
export async function GET(_: NextRequest, {params}: {params: {id: string}}) {
    const apiResult: API_RESULT = {
        RESULT_CODE: 200,
        RESULT_MSG: "Success",
        RESULT_DATA: undefined
    }

    const submissionDetail = await getRecruitSubmissionDetail(params.id);
    if(submissionDetail === undefined || submissionDetail.timestamp == 0){
        apiResult.RESULT_CODE = 100;
        apiResult.RESULT_MSG = "An Error Occurred";
        apiResult.RESULT_DATA = undefined;
        return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
    }

    apiResult.RESULT_DATA = submissionDetail;

    return NextResponse.json(apiResult, { status: 200, headers: corsHeader });
}