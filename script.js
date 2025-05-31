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

  const keywords = {
    hello: "Hi there!",
    hi: "Hello!",
    hey: "Hey! How are you?",
    greetings: "Greetings! How may I help?",
    bye: "Goodbye! Have a nice day!",
    thanks: "You're welcome!",
    "thank you": "No problem!",
    help: "Sure! What do you need help with?",
    "who are you": "I'm your chatbot assistant.",
    "what is your name": "I'm just called ChatBot for now!",
    "how are you": "I'm just code, but thanks for asking!",
    "what can you do": "I can chat, answer questions, and more!",
    joke: "Why did the JS developer go broke? Because he didn’t 'null' his bills!",
    time: "I can't tell time yet, but it's always coding time!",
    weather: "I'm not connected to the weather API yet.",
    // — Now add 1000+ more entries for common conversation
    food: "I'm digital, so I don't eat — but pizza sounds great!",
    hungry: "Maybe grab a snack!",
    tired: "Get some rest if you can!",
    bored: "How about coding something fun?",
    music: "What's your favorite genre?",
    movie: "I love sci-fi, what about you?",
    game: "I enjoy hearing about strategy games. What's your favorite?",
    code: "Need help with JavaScript or another language?",
    javascript: "JavaScript is the language of the web!",
    python: "Python is popular and powerful!",
    html: "HTML gives structure to web content.",
    css: "CSS makes it pretty!",
    "how do i": "Can you clarify what you're trying to do?",
    error: "Can you paste the full error message?",
    debug: "Have you tried console logging?",
    crash: "Did it throw an error or just stop?",
    restart: "Sometimes a refresh helps!",
    wifi: "Try checking your router or modem.",
    internet: "If you're offline, your messages might not go through.",
    dad: "Tell me more about your dad!",
    mom: "Tell me more about your mom!",
    sibling: "Siblings can be fun or frustrating!",
    school: "What subject are you working on?",
    math: "Algebra, geometry, calculus?",
    science: "Biology, chemistry, or physics?",
    history: "What era are you studying?",
    homework: "Let’s tackle it together!",
    test: "Good luck! You’ll do great!",
    love: "Love is a powerful feeling!",
    hate: "Hate hurts everyone.",
    sad: "I’m here for you 💙",
    happy: "Yay! That’s great to hear!",
    excited: "Sounds like something awesome is coming!",
    scared: "It’s okay to feel that way sometimes.",
    anxious: "Deep breaths. Want to talk about it?",
    depressed: "You are not alone. Reach out to someone you trust 💛",
    fun: "Let’s make it more fun then!",
    cat: "I love cats! 🐱",
    dog: "Dogs are the best! 🐶",
    animal: "Animals are wonderful companions.",
    vacation: "Anywhere you want to go?",
    travel: "I’d go to Japan if I could!",
    planet: "Earth is amazing. So are the others!",
    universe: "It's vast and mysterious!",
    alien: "👽 I hope they’re friendly!",
    robot: "Like me?",
    ai: "Artificial intelligence is pretty neat!",
    smart: "You're smart too!",
    dumb: "No one is dumb — we all keep learning!",
    learn: "Learning is a lifelong journey.",
    teach: "I can try! What do you want to learn?",
    build: "Let’s build something cool!",
    project: "What’s your project about?",
    website: "Want to build one? HTML, CSS, JS are the way!",
    app: "Mobile or web?",
    game: "Platformer, RPG, or puzzle?",
    idea: "Let’s brainstorm together!",
    start: "Let’s go!",
    stop: "Okay, I’ll be quiet for now 😶",
    continue: "Here we go again!",
    ok: "👍",
    yes: "Great!",
    no: "No problem.",
    maybe: "Take your time deciding.",
    cool: "Thanks 😎",
    awesome: "You're awesome too!",
    lol: "😂",
    haha: "🤣",
    "who made you": "OpenAI made me smart, you're making me smarter!",
    bored: "Want a programming challenge?",
    motivation: "You’ve got this 💪",
    inspire: "Believe in your code!",
    programming: "It’s a skill worth learning.",
    algorithm: "Need help with logic?",
    function: "Functions help us avoid repetition!",
    loop: "For or while?",
    array: "A list of stuff, basically.",
    object: "Key-value magic!",
    variable: "Let’s name things properly!",
    constant: "Use `const` when it won’t change.",
    bug: "Let’s squash it!",
    fix: "Can you share the code?",
    semicolon: "JS doesn’t always need them, but it helps.",
    syntax: "It matters a lot in code.",
    compile: "That’s for languages like C++ or Java!",
    terminal: "Your gateway to system power!",
    bash: "Shell scripting is fun.",
    linux: "Penguins! 🐧",
    windows: "It's a classic.",
    mac: "Fancy choice!",
    // ... Add hundreds more as needed
  };

  let response = "Hmm... I’m not sure how to respond to that.";

  for (let keyword in keywords) {
    if (lowerText.includes(keyword)) {
      response = keywords[keyword];
      break;
    }
  }

  setTimeout(() => appendMessage('bot', response), 500);
}
