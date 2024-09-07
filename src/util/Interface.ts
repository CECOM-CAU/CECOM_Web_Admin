export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: LoginResult | undefined
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