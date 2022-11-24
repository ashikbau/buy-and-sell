// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain, 
//   projectId:process.env.REACT_APP_projectId, 
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId 
apiKey: "AIzaSyDlkOVS_XWhuG5-e6VVPGRgo_xa5K9uc8U",
  authDomain: "buy-and-sell-498f9.firebaseapp.com",
  projectId: "buy-and-sell-498f9",
  storageBucket: "buy-and-sell-498f9.appspot.com",
  messagingSenderId: "110031285313",
  appId: "1:110031285313:web:d3c2cf33756283f8026ac0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;