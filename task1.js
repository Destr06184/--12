let count = 0;
const btn = document.getElementById('counter-btn');
const out = document.getElementById('click-count');

btn.addEventListener('click', () => {
  count += 1;
  out.textContent = count;
});
