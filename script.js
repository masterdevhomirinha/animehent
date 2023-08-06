const messageBox = document.getElementById("message-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

const chatGPT = new ChatGPT({
    apiKey: "YOUR_OPENAI_API_KEY"
});

sendButton.addEventListener("click", async function () {
    const message = messageInput.value;
    if (message) {
        const userMessageElement = document.createElement("div");
        userMessageElement.className = "message user";
        userMessageElement.textContent = "Você: " + message;
        messageBox.appendChild(userMessageElement);

        const response = await chatGPT.sendMessage(message);
        const aiMessageElement = document.createElement("div");
        aiMessageElement.className = "message ai";
        aiMessageElement.textContent = "ChatGPT: " + response.choices[0].message.content;
        messageBox.appendChild(aiMessageElement);

        messageInput.value = "";
    }
});

messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
