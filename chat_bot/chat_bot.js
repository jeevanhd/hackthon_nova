const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotPopup = document.getElementById('chatbotPopup');
const closeBtn = document.getElementById('closeBtn');

chatbotBtn.addEventListener('click', () => {
    chatbotPopup.style.display ='block';
});

closeBtn.addEventListener('click', () => {
    chatbotPopup.style.display = 'none';
});