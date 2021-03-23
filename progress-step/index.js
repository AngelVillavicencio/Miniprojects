var index = 1;
console.log('Hola amigos');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progresBar = document.getElementById('progress');

prevBtn.addEventListener('click', () => {
    console.log('Presionaste Atrás');
    if (index > 1) {
        console.log('index:'+index);
        index--;
        painting(index);
    }
})

nextBtn.addEventListener('click', () => {
    console.log('Presionaste Siguiente');
    if (index < 4) {
        console.log('index:'+index);
        index++;
        painting(index);
    }
})

/*circles.forEach((circle) => {
    circle.addEventListener('click', () => {
        console.log(circle.classList.value)
        if (circle.classList.value == 'circle active')
            circle.classList.remove('active')
        else {
            circle.classList.add('active');
        }
    })
})*/


const painting = (index) => {
    circles.forEach((circle) => {
        circle.classList.remove('active')
        if (parseInt(circle.id) < index) {
            console.log(circle.id);
            circle.classList.add('active');
        }
    })
    progresBar.style.width = 80*(index-1) + 'px';
}
