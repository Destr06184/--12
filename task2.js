const input = document.getElementById('name-input');
const btn = document.getElementById('greet-btn');
const output = document.getElementById('greeting-output');

btn.addEventListener('click', () => {
  const name = input.value.trim();
  output.textContent = name ? `Привет, ${name}!` : 'Пожалуйста, введите имя.';
});
