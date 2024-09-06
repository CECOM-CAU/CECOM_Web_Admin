import {FirebaseApp, initializeApp} from "@firebase/app";
import {doc, getDoc, getFirestore} from "@firebase/firestore";
import {Firestore} from "firebase/firestore";
import dotenv from "dotenv";
import {LoginResult, LoginUser} from "@/util/Interface";

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

export const tryLogin = async (username: String, password: String): Promise<LoginResult> => {
    initFirebase();

    const loginDoc = await getDoc(doc(firestoreDB!, "Login", "admin"));
    const userList: Array<LoginUser> = loginDoc.get("user");
    userList.forEach((userItem) => {
        if(username === userItem.username){
            if(password === userItem.password){
                return LoginResult.LOGIN_OK;
            }else{
                return LoginResult.LOGIN_FAIL_PASSWORD;
            }
        }
    });

    return LoginResult.LOGIN_FAIL_NO_ACCOUNT;
}