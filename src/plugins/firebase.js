import { initializeApp } from 'firebase/app'
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyDA0qHpC_pjtgu30_whgFJkf_gJffovAAg",
    authDomain: "my-sanctuary-charity.firebaseapp.com",
    projectId: "my-sanctuary-charity",
    storageBucket: "my-sanctuary-charity.appspot.com",
    messagingSenderId: "1005179268124",
    appId: "1:1005179268124:web:11ce11a2bfeb4cdfc303d9",
    measurementId: "G-KZ3VECKNT4"
}

export const firebaseApp = initializeApp(firebaseConfig)
