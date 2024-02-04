import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getAuth, onAuthStateChanged, signOut  } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyBCg4GipvOPOys3cmts0rNSJWb144V7bio",
    authDomain: "chat-app-58161.firebaseapp.com",
    projectId: "chat-app-58161",
    storageBucket: "chat-app-58161.appspot.com",
    messagingSenderId: "404038721886",
    appId: "1:404038721886:web:612d4ff0d726caa4f7afcf",
    measurementId: "G-R2BJSK7R7J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  let logOutBtn = document.getElementById("logOut");


  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
    } else {
      console.log("User is not login");
      window.location.href = "login.html"
    }
  });
  
  let logOut = () =>
  {
      signOut(auth).then(() => {
        // Sign-out successful.
        console.log("User sigout successfully");
        window.location.href = "login.html";
      }).catch((error) => {
        console.log("Eror -->", error);
      });
  }

  logOutBtn.addEventListener("click", logOut);
  
  
