/* javascript par aformulario */
// get all inputs
var inputs = document.querySelectorAll('input:not([type="submit"])')
let boton = document.querySelector('input[type="submit"]');

boton.addEventListener('click', validarInputs);

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        if(input.value != '') {
            input.classList.remove('error');
        } else {
          input.classList.add('error');
        }
    })
})

function validarInputs(e) {
    inputs.forEach(function (input) {
        if(input.value == '') {
            e.preventDefault();
            input.classList.add('error');
        }
    })
    
    console.log(document.querySelector('#mensaje'))
    if (document.querySelector('#mensaje').value == '') {
        document.querySelector('#mensaje').style.border = '1px solid red';
    }
}
