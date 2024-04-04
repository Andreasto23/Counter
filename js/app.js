const piu = document.querySelector('.plus');
const meno = document.querySelector('.minus');

let counter = document.querySelector('.counter');
counter.innerHTML= 0;

piu.addEventListener('click',()=> {
    counter.innerHTML++;
})

meno.addEventListener('click', () => {
    counter.innerHTML--;
})



