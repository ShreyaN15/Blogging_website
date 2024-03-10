let firebaseConfig = {
    apiKey: "AIzaSyBUg4u0p5leGEAECOxMQ5w_11iRVfTjrxQ",
    authDomain: "blogging-website-32ef9.firebaseapp.com",
    projectId: "blogging-website-32ef9",
    storageBucket: "blogging-website-32ef9.appspot.com",
    messagingSenderId: "205645852209",
    appId: "1:205645852209:web:e13889ceadfa4692f9af10"
  };

   // Initialize Firebase
   //const app = initializeApp(firebaseConfig);
   firebase.initializeApp(firebaseConfig);

   let db = firebase.firestore();