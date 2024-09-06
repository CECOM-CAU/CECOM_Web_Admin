import {FirebaseApp, initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import { Firestore } from "firebase/firestore";
import dotenv from "dotenv";

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

export const tryLogin = (username: String, password: String): Boolean => {
    initFirebase();
    
    return false;
}