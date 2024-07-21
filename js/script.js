
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nomevalidar();
    emailRegex();
    senhaValidar();
    compararSenhas();
});

function setError(index) {
    campos[index].style.border = '1px solid red';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nomevalidar() {
    if(campos[0].value.length < 3) { // o input do nome e o primeiro do arrey [0]
        setError(0); // o primeiro o index é 0 
    } else {
        removeError(0);
    }
}

function emailValidacao() {
    if(!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function senhaValidar() {
    if(campos[2].value.length < 8 ) {
        setError(2);
    } else {
        removeError(2);
        compararSenhas();
    }
}
function compararSenhas() {
    if(campos[2].value == campos[3].value && campos[3].value.length <= 8) {
        removeError(3);
    } else {
        setError(3);
    } 
}