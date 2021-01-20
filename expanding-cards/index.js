//console.log("Hola gente de twitch");
/*
var pi = document.getElementById("demo");
console.log(pi.innerHTML);
pi.innerHTML = "Hello world";

console.log(pi.innerHTML);


console.log(document.getElementById("perfil").innerHTML);*/
/*const btn = document.getElementById('btn-clickMe');
btn.addEventListener('click', () => {
    console.log("Me hizo click!!")
})*/

const panels = document.querySelectorAll('.panel'); /// selecciono todos los paneles que tengan como clase .panel

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}