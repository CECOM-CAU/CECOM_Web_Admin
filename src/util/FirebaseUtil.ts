import {FirebaseApp, initializeApp} from "@firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore} from "@firebase/firestore";
import {Firestore} from "firebase/firestore";
import dotenv from "dotenv";
import {
    LoginResult,
    LoginUser, RecruitQuestionList,
    RecruitSubmissionDetail,
    RecruitSubmissionItem,
    RecruitSubmissionList
} from "@/util/Interface";

let firebaseApp: FirebaseApp | null = null;
let firestoreDB: Firestore | null = null;

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

const initFirebase = () => {
    if(firebaseApp == null || firestoreDB == null){
        firebaseApp = initializeApp(firebaseConfig);
        firestoreDB = getFirestore(firebaseApp);
    }
}

export const checkLogin = async (requestData: LoginUser): Promise<LoginResult> => {
    initFirebase();

    const loginDoc = await getDoc(doc(firestoreDB!, "Login", "admin"));
    const userList: Array<LoginUser> = loginDoc.get("user");
    for(const userItem of userList){
        if(requestData.username === userItem.username){
            if(requestData.password === userItem.password){
                return LoginResult.LOGIN_OK;
            }else{
                return LoginResult.LOGIN_FAIL_PASSWORD;
            }
        }
    }

    return LoginResult.LOGIN_FAIL_NO_ACCOUNT;
}

export const getRecruitQuestionList = async () => {
    initFirebase();

    const questionDoc = await getDoc(doc(firestoreDB!, "Question", "data"));
    const questionList: RecruitQuestionList = {
        count: questionDoc.get("count"),
        list: questionDoc.get("list")
    }

    return questionList;
}



export const getRecruitSubmissionDetail = async (studentID: string) => {
    initFirebase();

    const submissionDetail: RecruitSubmissionDetail = {
        age: "",
        answer: [],
        college: "",
        department: "",
        grade: "",
        id: "",
        isPrivacyCollectAgree: false,
        name: "",
        phone: "",
        timestamp: 0
    }

    const recruitSubmissionDocs = await getDocs(collection(firestoreDB!, "Recruit"));
    if(recruitSubmissionDocs.empty){
        return submissionDetail;
    }

    for(const recruitSubmissionDoc of recruitSubmissionDocs.docs){
        if(recruitSubmissionDoc.get("id") == studentID){
            submissionDetail.age = recruitSubmissionDoc.get("age");
            submissionDetail.answer = recruitSubmissionDoc.get("answer");
            submissionDetail.college = recruitSubmissionDoc.get("college");
            submissionDetail.department = recruitSubmissionDoc.get("department");
            submissionDetail.grade = recruitSubmissionDoc.get("grade");
            submissionDetail.id = recruitSubmissionDoc.get("id");
            submissionDetail.isPrivacyCollectAgree = recruitSubmissionDoc.get("isPrivacyCollectAgree");
            submissionDetail.name = recruitSubmissionDoc.get("name");
            submissionDetail.phone = recruitSubmissionDoc.get("phone");
            submissionDetail.timestamp = Number.parseInt(recruitSubmissionDoc.id);

            break;
        }
    }

    return submissionDetail;
}

export const getRecruitSubmissionList = async () => {
    initFirebase();

    const submissionList: RecruitSubmissionList = {
        count: 0,
        data: []
    }

    const recruitSubmissionDocs = await getDocs(collection(firestoreDB!, "Recruit"));
    if(recruitSubmissionDocs.empty){
        return submissionList;
    }

    for(const recruitSubmissionDoc of recruitSubmissionDocs.docs){
        const submissionItem: RecruitSubmissionItem = {
            age: recruitSubmissionDoc.get("age"),
            answer: recruitSubmissionDoc.get("answer"),
            college: recruitSubmissionDoc.get("college"),
            department: recruitSubmissionDoc.get("department"),
            grade: recruitSubmissionDoc.get("grade"),
            id: recruitSubmissionDoc.get("id"),
            isPrivacyCollectAgree: recruitSubmissionDoc.get("isPrivacyCollectAgree"),
            name: recruitSubmissionDoc.get("name"),
            phone: recruitSubmissionDoc.get("phone"),
            timestamp: Number.parseInt(recruitSubmissionDoc.id)
        }

        if(submissionItem.age !== undefined
            && submissionItem.answer !== undefined
            && submissionItem.college !== undefined
            && submissionItem.department !== undefined
            && submissionItem.grade !== undefined
            && submissionItem.id !== undefined
            && submissionItem.name !== undefined
            && submissionItem.phone !== undefined
            && submissionItem.timestamp !== undefined){
            submissionList.count++;
            submissionList.data.push(submissionItem);
        }
    }

    return submissionList;
}