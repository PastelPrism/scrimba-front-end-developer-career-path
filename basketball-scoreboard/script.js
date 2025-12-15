(() => {
  const format = (n) => String(n).padStart(2, '0');

  const setupBoard = (section) => {
    const display = section.querySelector('.score-display');
    let score = 0;
    display.textContent = format(score);

    section.querySelectorAll('.btn').forEach((btn) => {
      const delta = Number(btn.textContent.replace('+', '')) || 0;
      btn.addEventListener('click', () => {
        score += delta;
        display.textContent = format(score);
      });
    });
  };

  document.querySelectorAll('.scoreboard').forEach(setupBoard);
})();
