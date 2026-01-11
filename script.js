const card = document.querySelector('.card');

// 3D tilt effect following mouse
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // mouse X inside card
  const y = e.clientY - rect.top;  // mouse Y inside card

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 10; // max tilt 10deg
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-10px)`;
});

// Reset card when mouse leaves
card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0px) scale(1) rotateX(0deg) rotateY(0deg)';
});

// Button navigation
const btn = document.getElementById('actionBtn');
btn.addEventListener('click', () => {
  window.location.href = 'about.html'; // navigate to your other page
});

