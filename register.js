import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js'


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


const register = (event) =>
{
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log(email.value, password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User -->", user);
        window.location.href = "login.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error --> ${errorMessage}`);
    });
    
    
    event.preventDefault();
}

const MoveToRegsiter = () =>
{
  mainDisplay.style.display = "none";
  loader.style.display = "flex";
  setTimeout(() =>
  {
    window.location.href = "login.html";
  }, 1000)
}



let regsiterBtn = document.getElementById("registerButton");
regsiterBtn.addEventListener("click", register);

const loader = document.getElementById("loader");
loader.style.display = "none"; 

const loginButton = document.getElementById("loginButton");
const mainDisplay = document.getElementById("main"); 

loginButton.addEventListener("click", MoveToRegsiter);