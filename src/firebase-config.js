import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdZXGt2IfukJx4Xv5EemhQoBuhJcJ7-m8",
  authDomain: "portfolio-website-c1b78.firebaseapp.com",
  projectId: "portfolio-website-c1b78",
  storageBucket: "portfolio-website-c1b78.appspot.com",
  messagingSenderId: "401595622670",
  appId: "1:401595622670:web:f735b3ba6e1895f1a1a35f",
  measurementId: "G-LPE49HN0C7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();

export { app, analytics };
