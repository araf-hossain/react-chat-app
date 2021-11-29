import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp (
    {
        apiKey: "AIzaSyBLDudzENbe6QIqgBepJSE5QBQYvkdh4JQ",
        authDomain: "react-chat-5bae0.firebaseapp.com",
        projectId: "react-chat-5bae0",
        storageBucket: "react-chat-5bae0.appspot.com",
        messagingSenderId: "541484276909",
        appId: "1:541484276909:web:fdd5fc0c69911b292bfa24"
    }
).auth();