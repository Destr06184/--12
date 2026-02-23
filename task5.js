const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const box = document.getElementById('resizable-box');
let size = 100;

increaseBtn.addEventListener('click', () => {
  size += 10;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
});

decreaseBtn.addEventListener('click', () => {
  if (size <= 10) return;
  size -= 10;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
});
