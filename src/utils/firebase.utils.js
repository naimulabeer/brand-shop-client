import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjyK6clz1skSd38TcrORbPcy9-BbKvRqw",
  authDomain: "clothing-craft.firebaseapp.com",
  projectId: "clothing-craft",
  storageBucket: "clothing-craft.appspot.com",
  messagingSenderId: "298485316288",
  appId: "1:298485316288:web:56533b2d9d27de6fb78b25",
};

const app = initializeApp(firebaseConfig);
export default app;
