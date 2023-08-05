const generateButton = document.getElementById("generateButton");
const animeImage = document.getElementById("animeImage");
const downloadLink = document.getElementById("downloadLink");
const randomTab = document.getElementById("randomTab");
const girlTab = document.getElementById("girlTab");
const boyTab = document.getElementById("boyTab");

randomTab.addEventListener("click", () => {
    randomTab.classList.add("active");
    girlTab.classList.remove("active");
    boyTab.classList.remove("active");
});

girlTab.addEventListener("click", () => {
    girlTab.classList.add("active");
    randomTab.classList.remove("active");
    boyTab.classList.remove("active");
});

boyTab.addEventListener("click", () => {
    boyTab.classList.add("active");
    randomTab.classList.remove("active");
    girlTab.classList.remove("active");
});

generateButton.addEventListener("click", () => {
    let tab = "waifu";

    if (girlTab.classList.contains("active")) {
        tab = "neko";
    } else if (boyTab.classList.contains("active")) {
        tab = "shin";
    }

    fetch(`https://api.waifu.pics/sfw/${tab}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            animeImage.src = imageUrl;
            animeImage.style.display = "block";
            downloadLink.href = imageUrl;
            downloadLink.style.display = "block";
        })
        .catch(error => console.error("Erro ao carregar a imagem:", error));
});
