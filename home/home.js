
document.querySelector('.chat-button').addEventListener('click', () => {
    window.location.href = '../chat/chat.html'; 
});

function playSound() {
    const sound = document.getElementById("zuzuSound");
    sound.play();
}
