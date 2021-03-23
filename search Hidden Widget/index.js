const btn = document.getElementById('boton');
const inputText = document.getElementById('inputText');

btn.addEventListener('click', () => {
    inputText.classList.toggle('active')
})
