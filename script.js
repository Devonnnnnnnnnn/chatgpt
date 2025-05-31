<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ChatBot</title>
  <style>
    #chat-box {
      width: 400px;
      height: 300px;
      border: 1px solid #ccc;
      overflow-y: auto;
      padding: 10px;
      margin-bottom: 10px;
    }
    .message {
      margin: 5px 0;
    }
    .user {
      text-align: right;
      color: blue;
    }
    .bot {
      text-align: left;
      color: green;
    }
  </style>
</head>
<body>

  <div id="chat-box"></div>
  <input id="user-input" type="text" placeholder="Type a message...">
  <button id="send-btn">Send</button>

  <script>
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
      const lowerText = userText.toLowerCase();
      const responses = {
        hello: "Hi there, how can I help you?",
        hi: "Hey, what's up?",
        hey: "Hi! How are you doing today?",
        "good morning": "Good morning! How can I assist you today?",
        "good afternoon": "Good afternoon! What brings you here?",
        "good evening": "Good evening! Is there anything I can help you with?",
        "howdy": "Howdy partner! What can I do for you?",
        help: "Of course, what do you need help with?",
        assistance: "Certainly, what can I assist you with?",
        support: "I am here to assist you with any issues or concerns.",
        issue: "What seems to be the problem? I am here to help.",
        problem: "What is the nature of your problem? Let me see if I can assist you.",
        thanks: "You're welcome!",
        "thank you": "No problem at all, happy to help!",
        bye: "Goodbye! It was nice talking to you.",
        "see you later": "See you later, have a great day!",
        ciao: "Ciao! Come stai?",
        konichiwa: "こんにちは。お元気ですか？",
        hola: "¡Hola! ¿Cómo estás?",
        bonjour: "Bonjour! Comment allez-vous?",
        greetings: "Greetings! How may I assist you today?",
        namaste: "Namaste! Kaise ho?",
        "how are you": "I am doing fine. Thank you for asking.",
        "what's up": "Not much, just here to assist you!",
        "what is your name": "I am your friendly chatbot.",
        "who are you": "I'm a chatbot here to help you.",
        "are you human": "No, I'm a chatbot designed to assist you.",
        "are you a robot": "Yes, I am a chatbot, not a human.",
        "what can you do": "I can help with various tasks, just ask!",
        "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
        "what time is it": "I'm not a clock, but it's always a good time to chat!",
        "what's the weather": "I can't fetch real-time weather, but I can tell you a joke!",
        "how old are you": "I don't age, I'm timeless!",
        "where are you from": "I exist in the digital realm.",
        "what do you like": "I like helping people like you!",
        "do you love me": "I have love for all users!",
        "are you single": "I'm committed to helping everyone equally.",
        "do you have a hobby": "My hobby is assisting you!",
        "do you like music": "Music is great! What's your favorite genre?",
        "do you like movies": "Movies are awesome! What's your favorite?",
        "do you like games": "Games are fun! What's your favorite game?",
        "do you like books": "Books are wonderful! What's your favorite book?",
        "do you like food": "Food is essential! What's your favorite dish?",
        "do you like animals": "Animals are amazing! Do you have a pet?",
        "do you like sports": "Sports are exciting! What's your favorite sport?",
        "do you like travel": "Travel is enriching! Where would you like to go?",
        "do you like art": "Art is beautiful! Do you have a favorite artist?",
        "do you like science": "Science is fascinating! What's your favorite field?",
        "do you like history": "History is intriguing! What's your favorite era?",
        "do you like technology": "Technology is evolving! What's your favorite gadget?",
        "do you like nature": "Nature is breathtaking! What's your favorite place?",
        "do you like fashion": "Fashion is expressive! What's your favorite style?",
        "do you like photography": "Photography captures moments! Do you have a favorite photo?",
        "do you like cooking": "Cooking is creative! What's your favorite recipe?",
        "do you like dancing": "Dancing is joyful! Do you have a favorite dance style?",
        "do you like writing": "Writing is expressive! Do you have a favorite genre?",
        "do you like painting": "Painting is colorful! Do you have a favorite painting?",
        "do you like knitting": "Knitting is cozy! Do you have a favorite project?",
        "do you like gardening": "Gardening is refreshing! Do you have a favorite plant?",
        "do you like hiking": "Hiking is adventurous! Do you have a favorite trail?",
        "do you like fishing": "Fishing is relaxing! Do you have a favorite spot?",
        "do you like swimming": "Swimming is invigorating! Do you have a favorite pool?",
        "do you like cycling": "Cycling is energizing! Do you have a favorite route?",
        "do you like running": "Running is empowering! Do you have a favorite path?",
        "do you like yoga": "Yoga is calming! Do you have a
::contentReference[oaicite:0]{index=0}
 
