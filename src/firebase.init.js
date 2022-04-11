// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAojzpq7P9h4FSkifUin5VEoZrAMLtUP6c",
  authDomain: "ema-john-simple-e2171.firebaseapp.com",
  projectId: "ema-john-simple-e2171",
  storageBucket: "ema-john-simple-e2171.appspot.com",
  messagingSenderId: "161317277075",
  appId: "1:161317277075:web:93d6ceb4e5449b6a106c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;