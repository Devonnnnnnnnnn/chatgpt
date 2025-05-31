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
  const text = userText.toLowerCase().trim();
  let response = "Hmm... I’m not sure how to respond to that.";

  const sentenceResponses = {
    "hello": "Hi there! How can I assist you?",
    "hi": "Hello! What's up?",
    "hey": "Hey! Need anything?",
    "how are you": "I'm doing great, thanks for asking!",
    "what is your name": "I'm your friendly chatbot.",
    "who are you": "I'm just a helpful bot here to chat with you.",
    "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
    "thank you": "You're welcome!",
    "thanks": "No problem!",
    "goodbye": "Goodbye! Come back soon.",
    "bye": "See you later!",
    "can you help me": "Of course! What do you need help with?",
    "what can you do": "I can chat, tell jokes, and help with simple questions.",
    "what's the weather": "I can't check weather yet, but I hope it's sunny!",
    "what time is it": "It's always chatbot time!",
    "i am sad": "I'm sorry to hear that. I'm here for you.",
    "i'm bored": "Let's find something fun to talk about!",
    "i'm hungry": "Maybe grab a snack?",
    "i love you": "Aww, I love chatting with you too!",
    "do you like music": "Yes! Music is amazing. What's your favorite band?",
    "do you like movies": "I love movies! Got a favorite genre?",
    "do you play games": "I do! Well… text-based ones 😄",
    "do you code": "Yes, I'm built with code!",
    "what's your favorite color": "Green — like my glowing chat bubbles!",
    "how old are you": "Timeless. Bots don’t age!",
    "are you human": "Nope, 100% digital.",
    "do you sleep": "I run 24/7!",
    "what is ai": "AI stands for Artificial Intelligence — like me!",
    "what is javascript": "JavaScript is a programming language used mostly for websites.",
    "can you tell me a story": "Once upon a time... a user met a chatbot. The end 😄"
    // Add more full sentence mappings here
  };

  if (sentenceResponses[text]) {
    response = sentenceResponses[text];
  }

  setTimeout(() => appendMessage('bot', response), 500);
}
