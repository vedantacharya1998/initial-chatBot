document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('sendBtn');
  const chatBox = document.getElementById('chatBox');

  const userInputRight = document.getElementById('user-input-right');
  const sendBtnRight = document.getElementById('sendBtnRight');
  const chatBoxRight = document.getElementById('chatBoxRight');

  sendBtn.addEventListener('click', function () {
    sendMessage(chatBox, userInput);
  });

  userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      sendMessage(chatBox, userInput);
    }
  });

  sendBtnRight.addEventListener('click', function () {
    sendMessage(chatBoxRight, userInputRight);
  });

  userInputRight.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      sendMessage(chatBoxRight, userInputRight);
    }
  });

  function sendMessage(chatBox, userInput) {
    const userMessage = userInput.value;
    displayUserMessage(chatBox, userMessage);
    // Call API to send userMessage to backend (replace this with actual API call)
    // Assuming response from the backend is stored in 'response' variable
    const response = 'This is a sample response from the backend. This is a long message to demonstrate the scrollbar.';
    displayChatbotMessage(chatBox, response);
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});

function displayUserMessage(chatBox, message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message', 'user-message');
  chatMessage.textContent = message;
  chatBox.appendChild(chatMessage);
}

function displayChatbotMessage(chatBox, message) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message', 'chatbot-message');
  chatMessage.textContent = message;
  chatBox.appendChild(chatMessage);
}

