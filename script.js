const loginForm = document.getElementById("loginForm");
const imageContainer = document.getElementById("imageContainer");
const animeImage = document.getElementById("animeImage");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    // Aqui você pode adicionar a lógica de verificação do usuário e senha.
    // Para fins deste exemplo, usei uma senha simples como "password".
    if (password === "password") {
        loginForm.style.display = "none";
        imageContainer.style.display = "block";

        fetch("https://api.waifu.pics/sfw/neko")
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.url;
                animeImage.src = imageUrl;
            })
            .catch(error => console.error("Erro ao carregar a imagem:", error));
    }
});
