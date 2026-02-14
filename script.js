const orbs = document.querySelectorAll('.orb');

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const strength = (index + 1) * 18;
    const moveX = (x - 0.5) * strength;
    const moveY = (y - 0.5) * strength;
    orb.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
});
