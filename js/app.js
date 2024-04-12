

const contatore = document.getElementById('counter');

const con = document.createElement('div');
con.setAttribute('class','container mt-3 pt-5 pb-5 bolla');
contatore.append(con);

const Row = document.createElement('div');
Row.setAttribute('class', 'row align-iems-center Riga');
document.querySelector('.bolla').append(Row);

const col1 = document.createElement('div');
col1.setAttribute('class', 'col  text-center colonnaUno ');
document.querySelector('.Riga').append(col1);

const buttonOne = document.createElement('button');
buttonOne.setAttribute('class','btn btn-primary p-3 plus');
buttonOne.textContent = '+';
document.querySelector('.colonnaUno').append(buttonOne);

const col2 = document.createElement('div');
col2.setAttribute('class', 'col counter text-center ');
document.querySelector('.Riga').append(col2);


const col3 = document.createElement('div');
col3.setAttribute('class', 'col  text-center colonnaTre ');
document.querySelector('.Riga').append(col3);

const buttonTwo = document.createElement('button');
buttonTwo.setAttribute('class','btn btn-primary p-3 minus');
buttonTwo.textContent = '-';
document.querySelector('.colonnaTre').append(buttonTwo);





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

