/* ===================== */
/* ANIMAÇÃO DE ENTRADA */
/* ===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

/* ===================== */
/* EFEITO 3D SEM CONFLITO */
/* ===================== */
document.querySelectorAll('.card').forEach(card => {

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -12;
    const rotateY = ((x / rect.width) - 0.5) * 12;

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  });

});
/* ===================== */
/* CLIQUE NOS CARDS */
/* ===================== */
document.querySelectorAll('.card[data-link]').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = card.dataset.link;
  });
});


