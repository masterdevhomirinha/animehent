const messageBox = document.getElementById("message-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", function () {
    const message = messageInput.value;
    if (message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = message;
        messageBox.appendChild(messageElement);
        messageInput.value = "";
    }
});

messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
