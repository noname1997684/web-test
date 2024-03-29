 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import {getDatabase,ref,child ,get,set} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);

 const auth = getAuth();
const database=getDatabase(app);

 document.getElementById("register").addEventListener("click", async ()=>{
      var email =  document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(database)
    
let us={
  email:email,
  id:Date.now()
}
 let name = us.email.match(/^.+(?=@)/)[0]; 
 alert("Registration successfully!!");
      set(ref(database,'User/'+ name),us).then(()=>{
        alert("Success")
        changLocation()  
      }).catch((error)=>alert(error))

      console.log(user);
      
     
       
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });	
      		  
});

 	const changLocation=()=>{
    window.location.href = 'dangnhap.html'	
  }