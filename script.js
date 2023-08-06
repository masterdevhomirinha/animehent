const animeImage = document.getElementById("anime-image");
const generateButton = document.getElementById("generate-button");
const userProfile = document.getElementById("user-profile");
const usernameSpan = document.getElementById("username");
const emailSpan = document.getElementById("email");

let currentUser = null;

// Simulação de dados de usuários (substitua por um backend real)
const users = [
    { username: "user1", email: "user1@example.com", password: "password1" },
    { username: "user2", email: "user2@example.com", password: "password2" }
];

generateButton.addEventListener("click", generateImage);

function generateImage() {
    // ... Código de geração de imagem (veja o exemplo anterior) ...
}

function showProfile(user) {
    currentUser = user;
    usernameSpan.textContent = user.username;
    emailSpan.textContent = user.email;
    userProfile.style.display = "block";
}

document.getElementById("login-button").addEventListener("click", function () {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        showProfile(user);
    } else {
        alert("Login inválido. Tente novamente.");
    }
});

document.getElementById("register-button").addEventListener("click", function () {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const newUser = { username, email, password };
    users.push(newUser);

    alert(`Usuário "${username}" cadastrado com sucesso!`);
    showProfile(newUser);
});
