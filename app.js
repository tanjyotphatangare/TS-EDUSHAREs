alert("JS Loaded");

import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// SIGNUP
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful ✅");
      window.location.href = "home.html";
    })
    .catch(error => {
      alert(error.message);
    });
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful ✅");
      window.location.href = "home.html";
    })
    .catch(error => {
      alert(error.message);
    });
};

// AUTO LOGIN CHECK
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("home.html")) {
    window.location.href = "index.html";
  }
});
