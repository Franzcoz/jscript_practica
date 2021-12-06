const formu = document.querySelector('#formulario');
const nom = document.querySelector('#nombre');
const asun = document.querySelector('#asunto');
const men = document.querySelector('#mensaje');
const valnom = document.querySelector('.validname');
const valas = document.querySelector('.validasun');
const valmen = document.querySelector('.validmen');
const resul = document.querySelector('.resultado');


const asun_usr = asun.value;
const men_usr = men.value;

function isValid(word) {
    return word.match(/^[a-zA-Z0-9 áéíóú]+$/) != null
}

nom.addEventListener('input', function() {
    let name_usr = nom.value;
    if (isValid(name_usr) == false) {
        valnom.innerHTML = 'Este campo sólo debe contener letras y números';
    } else if (isValid(name_usr)) {
        valnom.innerHTML = '';
    } else if (name_usr == '') {
        valnom.innerHTML = '';
    }
})
/*
nom.addEventListener('keyup', function() {
    let name_usr = nom.value;
    if (isValid(name_usr)) {
        valnom.innerHTML = '';
    }
})

/*
isValid(asun_usr);
isValid(men_usr);
*/
formu.addEventListener('submit', function(ev) {
    ev.preventDefault();

    const name_usr = nom.value;
    const asun_usr = asun.value;
    const men_usr = men.value;

    resul.innerHTML = `LLegó! ${name_usr} ${asun_usr} ${men_usr}`;

})