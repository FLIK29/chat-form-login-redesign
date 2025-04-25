import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.showLogin = () => {
  document.getElementById("main-options").classList.add("hidden");
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
};

window.showRegister = () => {
  document.getElementById("main-options").classList.add("hidden");
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
};

window.login = () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      if (userCredential.user.emailVerified) {
        window.location.href = "home.html";
      } else {
        alert("Por favor, verifica tu correo electrónico antes de iniciar sesión.");
      }
    })
    .catch(err => alert(err.message));
};

window.register = () => {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      sendEmailVerification(userCredential.user).then(() => {
        alert("Cuenta creada. Se ha enviado un correo de verificación.");
        showLogin();
      });
    })
    .catch(err => alert(err.message));
};
