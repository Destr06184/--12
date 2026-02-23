const btn = document.getElementById('theme-btn');
let dark = false;

btn.addEventListener('click', () => {
  dark = !dark;
  document.body.style.backgroundColor = dark ? '#333' : 'white';
  document.body.style.color = dark ? 'white' : 'black';
});
