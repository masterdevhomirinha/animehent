const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const imageContainer = document.getElementById("imageContainer");
const animeImage = document.getElementById("animeImage");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

loginButton.addEventListener("click", () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Simulação de autenticação simples
    if (username === "user" && password === "password") {
        showImageContainer();
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});

registerButton.addEventListener("click", () => {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    // Simulação de cadastro simples
    alert(`Usuário "${username}" cadastrado com sucesso.`);
});

function showImageContainer() {
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    imageContainer.style.display = "block";

    fetch("https://api.waifu.pics/sfw/neko")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            animeImage.src = imageUrl;
        })
        .catch(error => console.error("Erro ao carregar a imagem:", error));
}
