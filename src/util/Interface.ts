export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: undefined
}

export interface LoginUser {
    password: string
    username: string
}

export enum LoginResult {
    LOGIN_OK,
    LOGIN_FAIL_NO_ACCOUNT,
    LOGIN_FAIL_PASSWORD,
}