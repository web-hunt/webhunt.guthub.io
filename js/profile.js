// js/profile.js

import { auth } from "./firebase.js";

import {

    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

onAuthStateChanged(auth,user=>{

    if(!user){

        window.location.href="login.html";

        return;

    }

    document.getElementById("profileName").textContent =
        user.displayName || "WebHunt User";

    document.getElementById("profileEmail").textContent =
        user.email;

    if(user.photoURL){

        document.getElementById("profilePhoto").src =
            user.photoURL;

    }

    const favorites = JSON.parse(
        localStorage.getItem("webhunt-favorites")
    ) || [];

    document.getElementById("favoriteCount").textContent =
        favorites.length;

});

// ----------------------------
// Future Features
// ----------------------------
//
// - Sync favorites to Firestore
// - User collections
// - Submitted websites
// - Badges
// - User settings
// - Account deletion
// - Theme preference
//
