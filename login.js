import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'


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
const provider = new GoogleAuthProvider();

const laoder = document.getElementById("loader");
laoder.style.display = "none"; 


const Login = (event) => 
{
    const email = document.getElementById("email");
    const password = document.getElementById("password");


    console.log(email.value , password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error -->", errorMessage);
    });
    event.preventDefault();
} 

const loginFromGoogle = (event) =>
{
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.log(error);
    }); 

    event.preventDefault();
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    alert("You are already login");
    window.location.href = "index.html";
  } else {
    console.log("User is not login");
  }
});

const MoveToRegsiter = () =>
{
  mainDisplay.style.display = "none";
  laoder.style.display = "flex";
  setTimeout(() =>
  {
    window.location.href = "register.html";
  }, 1000)
}


const loginBtn = document.getElementById("loginButton");
loginBtn.addEventListener("click", Login);

const googleBtn = document.getElementById("googleButton");
googleBtn.addEventListener("click", loginFromGoogle);

const registerButton = document.getElementById("registerButton");
const mainDisplay = document.getElementById("main"); 

registerButton.addEventListener("click", MoveToRegsiter);



