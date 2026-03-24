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
      alert("Signup successful");
      window.location.href = "home.html";
    })
  .catch(err => {
  console.log(err);
  alert(err.message);
});
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful");
      window.location.href = "home.html";
    })
    .catch(err => {
  console.log(err);
  alert(err.message);
});
};

// AUTO LOGIN CHECK
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("home.html")) {
    window.location.href = "index.html";
  }
});

// NAVIGATION
window.showPage = function (page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = "<h3>Home</h3>";
  }

  if (page === "notes") {
    content.innerHTML = "<h3>Notes Screen</h3>";
  }

  if (page === "videos") {
    content.innerHTML = "<h3>Videos Screen</h3>";
  }

  if (page === "quiz") {
    content.innerHTML = "<h3>Quiz Screen</h3>";
  }

  if (page === "profile") {
    content.innerHTML = "<h3>Profile Screen</h3>";
  }
};
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// SIGN UP
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

// AUTO REDIRECT (IMPORTANT)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("No user");
  }
});
