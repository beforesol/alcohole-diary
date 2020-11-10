import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjkvx7T-6iHH6mWvP6b8vL_dtoYk4U5ys",
  authDomain: "alcohole-diary.firebaseapp.com",
  databaseURL: "https://alcohole-diary.firebaseio.com",
  projectId: "alcohole-diary",
  storageBucket: "alcohole-diary.appspot.com",
  messagingSenderId: "783010559172",
  appId: "1:783010559172:web:4258b3f672b46b48890591",
  measurementId: "G-22R0FGLND7"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };