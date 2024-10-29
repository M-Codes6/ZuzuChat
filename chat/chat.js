// Get references to HTML elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Define predefined responses
const responses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What can I do for you?",
    "hey": "hi ! What can i do for you?",
    "ok": "thank you !",
    "ohk": "thank you !",
    "k": "thank you !",
    "what can u do for me" : "I'm here to asist u !",
    "wat can u do for me" : "I'm here to asist u !",
    "how are you": "I'm just a bot, so I don't have feelings.",
    "how r u": "I'm just a bot, so I don't have feelings.",
    "what's your name": "I'm a zUzU🧸",
    "what is your name": "I'm a zUzU🧸",
    "what is ur name": "I'm a zUzU🧸",
    "what can you do": "I'm zUzU🧸 , i can assist your answers",
    "what can u do": "I'm zUzU🧸 , i can assist your answers",
    "wat can u do": "I'm zUzU🧸 , i can assist your answers",
    "what u can do": "I'm zUzU🧸 , i can assist your answers",
    "wat u can  do": "I'm zUzU🧸 , i can assist your answers",
    "help": "Sure, tell me what kind of help you need.",
    "Help": "Sure, tell me what kind of help you need.",
    "need help": "Sure, tell me what kind of help you need.",
    "Need help": "Sure, tell me what kind of help you need.",
    "bye": "Goodbye! Have a great day.",
    "ok bye": "Goodbye! Have a great day.",
    "ohk bye": "Goodbye! Have a great day.",
    "thank you": "You're welcome!",
    "thanku": "You're welcome!",
    "thank u": "You're welcome!",
    "who are you": "I'm a chat bot (zUzU🧸) designed to assist with your questions.",
    "who r u": "I'm a chat bot (zUzU🧸) designed to assist with your questions.",
    "who'r u": "I'm a chat bot (zUzU🧸) designed to assist with your questions.",
    "tell me a joke": "Why did the computer keep freezing? Because it left its Windows open!",
    "relationship": "Relationships can be both rewarding and challenging. It's important to communicate and support each other.",
    "feelings": "Feelings are a natural part of being human. It's important to acknowledge and express them.",
    "mathematics": "Mathematics is the language of the universe. It's a powerful tool for solving problems and understanding the world.",
    "science": "Science is a systematic way of exploring and understanding the natural world. It helps us make sense of the world around us.",
    "i love you": "Aw, I love you too babe😊",
    "i luv u": "Aw, I love you too babe😊",
    "hahah": "Hahah! That's funny!",
    "hehehe": "Hehehe! You have a great sense of humor!",
    "hehe": "Hehehe! You have a great sense of humor!",
    "oochaa": "Oochaa! That's an interesting expression!",
    "tell me a story": "Once upon a time, in a faraway land, there was a brave adventurer...",
    "food": "Food is amazing! What's your favorite dish?",
    "travel": "Traveling broadens the mind and feeds the soul. Where's your dream travel destination?",
    "music": "Music is the universal language of emotions. What's your favorite genre?",
    "books": "Books are a gateway to other worlds. Have you read any good books lately?",
    "movies": "Movies are a great way to relax. What's the last movie you watched?",
    "pets": "Pets bring so much joy into our lives. Do you have any pets?",
    "hobbies": "Hobbies are a wonderful way to unwind. What's your favorite hobby?",
    "dreams": "Dreams can be mysterious and intriguing. Do you have any recurring dreams?",
    "goals": "Setting goals is the first step to turning dreams into reality. What are your goals?",
    "inspiration": "Inspiration can come from unexpected places. What inspires you?",
    "challenges": "Challenges make us stronger and wiser. How do you overcome challenges?",
    "advice": "Here's a piece of advice: Always stay true to yourself and your values.",
    "random": "Let's talk about something random! What's on your mind?",
    "weather": "The weather can be quite unpredictable. How's the weather in your area today?",
    "technology": "Technology is constantly evolving. What's your favorite tech gadget?",
    "nature": "Nature is breathtakingly beautiful. Have you had any recent nature experiences?",
    "history": "History is full of fascinating stories. Do you have a favorite historical event?",
    "art": "Art comes in many forms. Do you enjoy creating or appreciating art?",
    "games": "Games are a great way to have fun. Do you play any video or board games?",
    "goals": "Setting goals is important for personal growth. What's a goal you're working toward?",
    "mindfulness": "Practicing mindfulness can bring peace and clarity. How do you practice mindfulness?",
    "positivity": "Staying positive is key to a happy life. What's something that made you smile today?",
    "future": "The future is full of possibilities. What are you looking forward to in the future?",
    "tell me about technology": "Technology is constantly evolving and shaping our world. It includes everything from smartphones to artificial intelligence.",
    "what's the weather like today": "I'm not equipped to provide real-time weather updates. You can check a weather website or app for the current conditions.",
    "recommend a book": "Sure! What genre of book are you interested in? I can recommend something based on your preferences.",
    "favorite color": "I don't have a favorite color, but I think all colors are beautiful in their own way.",
    "how do I learn programming": "Learning programming can be a fun journey! You can start by picking a programming language and finding online tutorials and courses.",
    "what is the meaning of life": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a topic with many different perspectives and answers.",
    "what is the meaning of lyf": "The meaning of life is a profound philosophical question that people have pondered for centuries. It's a topic with many different perspectives and answers.",
    "tell me a fun fact": "Sure! Here's a fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
    "what's your favorite joke": "I don't have personal preferences, but here's a joke: Why don't scientists trust atoms? Because they make up everything!",
    "what is ur favorite joke": "I don't have personal preferences, but here's a joke: Why don't scientists trust atoms? Because they make up everything!",
    "what is your favorite joke": "I don't have personal preferences, but here's a joke: Why don't scientists trust atoms? Because they make up everything!",
    "what kind of questions": " You can ask me anything you'd like—whether it's about general knowledge, tech tips, coding questions, or even just for a friendly chat. I'm here to help!"

};

// Function to send a user message and receive a bot response

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    appendMessage(userMessage, "chat-user");

    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        appendMessage(botMessage, "chat-bot");
    }, 500);

    userInput.value = "";
}

// Function to append a message to the chat box

function appendMessage(message, className) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${className}`;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get a bot response based on user input

function getBotResponse(userMessage) {
    const lowercaseMessage = userMessage.toLowerCase();

    for (const input in responses) {
        if (lowercaseMessage.includes(input)) {
            return responses[input];
        }
    }

    return " Hello! I’m currently under maintenance and can only answer a set of predefined questions. Thanks for your patience! ";
}

// Listen for Enter key press in the input field

userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});



// getting ḥeart effect on img on hover


document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const image = document.querySelector('header img');
    const heartsContainer = document.getElementById('hearts-container');
  
    image.addEventListener('mousemove', createHeart);
  
    function createHeart(e) {
      const heart = document.createElement('span');
      const x = e.clientX - header.getBoundingClientRect().left;
      const y = e.clientY - header.getBoundingClientRect().top;
  
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
  
      heart.innerHTML = '❤️'; 
  
      heart.classList.add('heart');
  
      heartsContainer.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  });

