const gameArea = document.getElementById('gameArea');
const message = document.getElementById('message');
let score = 0;

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 260 + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  
  heart.addEventListener('click', () => {
    heart.remove();
    score++;
    if (score >= 5) {
      gameArea.classList.add('hidden');
      message.classList.remove('hidden');
    }
  });

  gameArea.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);
