document.getElementById('tattoo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const chatLog = document.getElementById('chat-log');

  this.style.display = 'none';
  document.getElementById('chat-container').style.display = 'block';

  for (let [key, value] of formData.entries()) {
    const msg = document.createElement('div');
    msg.className = 'message user';
    msg.textContent = `${key}: ${value}`;
    chatLog.appendChild(msg);
  }

  const botReply = document.createElement('div');
  botReply.className = 'message bot';
  botReply.textContent = "¡Gracias por tu información! Revisaré tu idea y te contactaré pronto.";
  chatLog.appendChild(botReply);
});

document.getElementById('chat-send').addEventListener('click', function() {
  const input = document.getElementById('chat-input');
  const text = input.value;
  if (!text.trim()) return;

  const userReply = document.createElement('div');
  userReply.className = 'message user';
  userReply.textContent = text;
  document.getElementById('chat-log').appendChild(userReply);
  input.value = '';
});
