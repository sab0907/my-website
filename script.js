const card = document.querySelector('.card');

/* ======================
   3D TILT EFFECT
====================== */
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `
    rotateX(${-rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.05)
    translateY(-10px)
  `;
});

card.addEventListener('mouseleave', () => {
  card.style.transform =
    'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)';
});

/* ======================
   BUTTON ACTIONS
====================== */
const learnBtn = document.getElementById('learnBtn');
const gameBtn = document.getElementById('gameBtn');

if (learnBtn) {
  learnBtn.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
}

if (gameBtn) {
  gameBtn.addEventListener('click', () => {
    alert('🎮 Game coming soon!');
  });
}
