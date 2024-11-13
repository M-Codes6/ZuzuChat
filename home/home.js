
document.querySelector('.chat-button').addEventListener('click', () => {
    window.location.href = '../chat/chat.html'; 
});

function playSound() {
    const sound = document.getElementById("zuzuSound");
    sound.play();
}




if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js")
        .then(registration => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch(error => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
  