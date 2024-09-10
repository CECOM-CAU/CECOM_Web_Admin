export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: LoginResult | RecruitAvailability | RecruitQuestionList | RecruitSubmissionDetail | RecruitSubmissionList | undefined
}

export interface LoginUser {
    password: string
    username: string
}

export const enum LoginResult {
    LOGIN_OK = "OK",
    LOGIN_FAIL_NO_ACCOUNT = "FAIL_NO_ACCOUNT",
    LOGIN_FAIL_PASSWORD = "FAIL_PASSWORD",
}

export interface RecruitAvailability {
    isAvail: boolean
    message: string
}

export interface RecruitQuestionList {
    count: number
    list: Array<string>
}

export interface RecruitSubmissionDetail {
    age: string
    answer: Array<string>
    college: string
    department: string
    grade: string
    id: string
    isPrivacyCollectAgree: boolean
    name: string
    phone: string
    timestamp: number
}

export interface RecruitSubmissionItem {
    age: string
    answer: Array<string>
    college: string
    department: string
    grade: string
    id: string
    isPrivacyCollectAgree: boolean
    name: string
    phone: string
    timestamp: number
}

export interface RecruitSubmissionList {
    count: number
    data: Array<RecruitSubmissionItem>
}