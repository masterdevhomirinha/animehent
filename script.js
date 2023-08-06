const videoContainer = document.getElementById("video-container");

function addVideo() {
    const videoUrl = prompt("https://www.youtube.com/watch?v=35hMrj6wRw4:");
    if (videoUrl) {
        const videoId = getVideoIdFromUrl(videoUrl);
        if (videoId) {
            const videoElement = document.createElement("div");
            videoElement.className = "video";
            videoElement.innerHTML = `
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            `;

            videoContainer.appendChild(videoElement);
        } else {
            alert("URL inválida do YouTube.");
        }
    }
}

function getVideoIdFromUrl(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    return match ? match[1] : null;
}

window.onload = function () {
    const addButton = document.createElement("button");
    addButton.innerText = "Adicionar Vídeo";
    addButton.onclick = addVideo;

    videoContainer.appendChild(addButton);
};
