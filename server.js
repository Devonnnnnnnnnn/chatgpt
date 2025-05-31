const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleUserInput();
});

function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage('user', text);
userInput.value = '';
  generateBotResponse(text);
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userText) {
let response = '';

  if (userText.toLowerCase().includes('hello')) {
    response = 'Hello! How can I assist you today?';
  } else if (userText.toLowerCase().includes('help')) {
    response = 'Sure! I can help with coding, ideas, and more. Just ask!';
  } else {
    response = 'Hmm... I\'m not sure how to respond to that.';
  }

  setTimeout(() => appendMessage('bot', response), 500);
}
