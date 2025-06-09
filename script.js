const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Default timezone
let userTimeZone = 'America/New_York';

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleUserInput();
});

function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getCurrentTimeString() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: userTimeZone
  };
  try {
    return new Intl.DateTimeFormat('en-US', options).format(now);
  } catch (e) {
    return "Invalid timezone format.";
  }
}

const phraseResponses = {
  "my time": () => `Your time is ${getCurrentTimeString()}.`,
  "your time": "My time is chatbot time — always ready to chat!",
  "what is my time": () => `Your time is ${getCurrentTimeString()}.`,
  "what time is it": () => `It's currently ${getCurrentTimeString()} in your timezone.`,
  "time": "What's your timezone?",
  "timezone": "To set your timezone, type: set timezone Europe/London",
  "hello": "Hi there! How can I assist you?",
  "thank you": "You're welcome!",
  "thanks": "No problem!",
  "help": "I'm here to help! Try asking about time or setting a timezone.",
  "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
  "goodbye": "Goodbye! Come back soon.",
};

function generateBotResponse(userText) {
  const text = userText.toLowerCase().trim();

  // Handle "set timezone Region/City"
  if (text.startsWith("set timezone")) {
    const tz = userText.substring(13).trim().replace(" ", "_");
    try {
      // Validate timezone
      new Intl.DateTimeFormat('en-US', { timeZone: tz }).format(new Date());
      userTimeZone = tz;
      setTimeout(() => appendMessage('bot', `Got it! I'll use the timezone: ${tz}`), 500);
    } catch (e) {
      setTimeout(() => appendMessage('bot', `Hmm, "${tz}" doesn't seem to be a valid timezone.`), 500);
    }
    return;
  }

  // Check exact phrase matches
  for (const phrase of Object.keys(phraseResponses).sort((a, b) => b.length - a.length)) {
    if (text === phrase) {
      const response = typeof phraseResponses[phrase] === 'function'
        ? phraseResponses[phrase]()
        : phraseResponses[phrase];
      setTimeout(() => appendMessage('bot', response), 500);
      return;
    }
  }

  // Fallback
  setTimeout(() => appendMessage('bot', "Hmm... I’m not sure how to respond to that."), 500);
}

function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage('user', text);
  userInput.value = '';
  generateBotResponse(text);
}
