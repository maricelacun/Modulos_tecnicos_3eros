const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Cargar mensajes del localStorage al iniciar
const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
    });
};

// Guardar mensajes en localStorage
const saveMessage = (message) => {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push(message);
    localStorage.setItem('chatMessages', JSON.stringify(messages));
};

// Enviar mensaje
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        saveMessage(message);
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        messageInput.value = ''; // Limpiar el input
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazar hacia abajo
    }
});

// Cargar mensajes al inicio
loadMessages();
