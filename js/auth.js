// js/auth.js

import {
    auth,
    googleProvider
} from "./firebase.js";

import {

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword,

    signInWithPopup,

    updateProfile,

    onAuthStateChanged,

    signOut

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// ----------------------
// Login
// ----------------------

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("Welcome back!");

window.location.href="profile.html";

}

catch(error){

alert(error.message);

}

});

}

// ----------------------
// Signup
// ----------------------

const signupForm =
document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const username =
document.getElementById("signupName").value;

const email =
document.getElementById("signupEmail").value;

const password =
document.getElementById("signupPassword").value;

const confirm =
document.getElementById("signupConfirm").value;

if(password!==confirm){

alert("Passwords do not match.");

return;

}

try{

const userCredential =

await createUserWithEmailAndPassword(

auth,

email,

password

);

await updateProfile(

userCredential.user,

{

displayName:username

}

);

alert("Account created!");

window.location.href="profile.html";

}

catch(error){

alert(error.message);

}

});

}

// ----------------------
// Google Login
// ----------------------

const googleButtons=[

document.getElementById("googleLogin"),

document.getElementById("googleSignup")

];

googleButtons.forEach(button=>{

if(!button) return;

button.addEventListener("click",async()=>{

try{

await signInWithPopup(

auth,

googleProvider

);

window.location.href="profile.html";

}

catch(error){

alert(error.message);

}

});

});

// ----------------------
// Auth Guard
// ----------------------

onAuthStateChanged(auth,user=>{

const profilePage=

window.location.pathname.includes("profile.html");

if(profilePage && !user){

window.location.href="login.html";

}

});

// ----------------------
// Logout
// ----------------------

window.logout = async function(){

await signOut(auth);

window.location.href="login.html";

};
