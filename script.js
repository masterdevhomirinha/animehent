const content = document.getElementById("content");
const loginForm = document.getElementById("login-form");
const registrationForm = document.getElementById("registration-form");
const profile = document.getElementById("profile");
const profileImage = document.getElementById("profile-image");

let loggedInUser = null;

document.getElementById("login-button").addEventListener("click", function () {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    
    // Simulação de login (substitua por autenticação real)
    if (username === "user" && password === "password") {
        loggedInUser = username;
        showProfile();
    } else {
        alert("Login inválido. Tente novamente.");
    }
});

document.getElementById("register-button").addEventListener("click", function () {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    
    // Simulação de cadastro (substitua por armazenamento real)
    alert(`Usuário "${username}" cadastrado com sucesso!`);
});

function showProfile() {
    loginForm.style.display = "none";
    registrationForm.style.display = "none";
    profile.style.display = "block";

    // Simulação de geração de foto de anime (substitua por lógica real)
    const randomImageNumber = Math.floor(Math.random() * 10) + 1;
    const imageUrl = `https://www.example.com/anime${randomImageNumber}.jpg`;
    profileImage.src = imageUrl;
}
