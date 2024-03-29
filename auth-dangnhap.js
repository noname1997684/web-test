 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

 

 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

   apiKey: "AIzaSyBK2hHhGcmPYpJeNorvV0wkbDKBCXnPBbI",

   authDomain: "web-lop.firebaseapp.com",

   projectId: "web-lop",

   storageBucket: "web-lop.appspot.com",

   messagingSenderId: "250364090707",

   appId: "1:250364090707:web:29a903da5c27c7030769a6",

   measurementId: "G-XLW1Z7MBP5"

 };

 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);

 const auth = getAuth();
document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      localStorage.setItem('auth',true);
      localStorage.setItem('email',email);
      window.location.href='index.html'
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });	})	 