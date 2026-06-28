import { auth, googleProvider } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const form = document.getElementById("authForm");

const title = document.getElementById("formTitle");
const subtitle = document.getElementById("formSubtitle");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const submitButton = document.getElementById("submitButton");

const toggleMode = document.getElementById("toggleMode");
const toggleText = document.getElementById("toggleText");

const googleButton = document.getElementById("googleButton");

let signupMode = false;

function updateUI(){

    if(!title) return;

    if(signupMode){

        title.textContent = "Create Account";

        subtitle.textContent =
        "Create your free WebHunt account.";

        username.style.display = "block";

        confirmPassword.style.display = "block";

        submitButton.textContent = "Create Account";

        toggleText.innerHTML =
        `Already have an account?
        <a href="#" id="toggleMode">Log In</a>`;

    }else{

        title.textContent = "Welcome Back";

        subtitle.textContent =
        "Log in to continue discovering amazing websites.";

        username.style.display = "none";

        confirmPassword.style.display = "none";

        submitButton.textContent = "Log In";

        toggleText.innerHTML =
        `Don't have an account?
        <a href="#" id="toggleMode">Create one</a>`;

    }

    document.getElementById("toggleMode")
        .addEventListener("click",toggleClick);

}

function toggleClick(e){

    e.preventDefault();

    signupMode = !signupMode;

    updateUI();

}

if(toggleMode){

    toggleMode.addEventListener("click",toggleClick);

}

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();

try{

if(signupMode){

if(password.value!==confirmPassword.value){

alert("Passwords do not match.");

return;

}

const userCredential =
await createUserWithEmailAndPassword(

auth,

email.value,

password.value

);

await updateProfile(

userCredential.user,

{

displayName:username.value

}

);

alert("Account created!");

}else{

await signInWithEmailAndPassword(

auth,

email.value,

password.value

);

alert("Welcome back!");

}

window.location.href="profile.html";

}catch(error){

alert(error.message);

}

});

}

if(googleButton){

googleButton.addEventListener("click",async()=>{

try{

await signInWithPopup(auth,googleProvider);

window.location.href="profile.html";

}catch(error){

alert(error.message);

}

});

}

onAuthStateChanged(auth,user=>{

const authLinks=document.getElementById("authLinks");

if(!authLinks) return;

if(user){

authLinks.innerHTML=
`<a href="profile.html">👤 ${user.displayName || "Profile"}</a>`;

}else{

authLinks.innerHTML=
`<a href="login.html">Login</a>`;

}

});

window.logout = async()=>{

await signOut(auth);

window.location.href="index.html";

};

updateUI();
