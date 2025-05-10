// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Cấu hình của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCowxsA9D_AN1DPULSx0RlCseh_maXCMuA",
  authDomain: "expo-example-ddabc.firebaseapp.com",
  projectId: "expo-example-ddabc",
  storageBucket: "expo-example-ddabc.appspot.com", // <- sửa lại `.app` thành `.appspot.com`
  messagingSenderId: "244291593849",
  appId: "1:244291593849:web:5e7d3d2fe6cf502fa396a8",
  measurementId: "G-M072XKT82T", // không dùng trong React Native
};

// Khởi tạo Firebase app
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Lấy instance Firestore
export const auth = getAuth(app);

// export { db };
