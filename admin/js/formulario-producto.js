//JavaScript personalizado evitando la redundación en las funciones principales para la validación

//Elementos del formulario
const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

//Expresiones para la validación en los campos
const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
};

//Estado de validación en los campos
const campos = {
    inputProducto: false,
    inputModelo: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false,
    inputTalla: false,
    inputImagen: false
};

//Función para validar un campo específico
const validarCampo = (expresion, input, campo) => {
    const element = document.getElementById(campo);

    if (expresion.test(input.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        campos[campo] = true;
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        campos[campo] = false;
    }
};

//Función de validación para todo el formulario
const validarFormulario = (e) => {
    const { name, value } = e.target;

    switch (name) {
        case 'inputProducto':
        case 'inputModelo':
        case 'inputDetalle':
        case 'inputPeso':
        case 'inputMaterial':
        case 'inputStock':
            validarCampo(expresiones[name], e.target, name);
            break;
        case 'inputTalla':
        case 'inputImagen':
            campos[name] = value !== "";
            const element = document.getElementById(name);
            element.classList.toggle('is-valid', campos[name]);
            element.classList.toggle('is-invalid', !campos[name]);
            break;
    }
};

//Eventos de los campos de entrada
inputs.forEach((input) => {
    input.addEventListener('input', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

//Eventos de los campos de selección
selects.forEach((select) => {
    select.addEventListener('blur', validarFormulario);
});

//JavaScript antiguo

/*const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
}

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputProducto: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`${campo}`).classList.add('is-valid');
        document.getElementById(`${campo}`).classList.remove('is-invalid');
        campos[campo] = true;
    }
    else {
        document.getElementById(`${campo}`).classList.add('is-invalid');
        document.getElementById(`${campo}`).classList.remove('is-ivalid');
        campos[campo] = false;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "inputProducto":
            validarCampo(expresiones.inputProducto, e.target, 'inputProducto');
            break;
        case "inputModelo":
            validarCampo(expresiones.inputModelo, e.target, 'inputModelo');
            break;
        case "inputProducto":
            validarCampo(expresiones.inputProducto, e.target, 'inputProducto');
            break;
        case "inputDetalle":
            validarCampo(expresiones.inputDetalle, e.target, 'inputDetalle');
            break;
        case "inputPeso":
            validarCampo(expresiones.inputPeso, e.target, 'inputPeso');
            break;
        case "inputMaterial":
            validarCampo(expresiones.inputMaterial, e.target, 'inputMaterial');
            break;
        case "inputStock":
            validarCampo(expresiones.inputStock, e.target, 'inputStock');
            break;
        case "inputTalla":
            if (e.target.value !== '') {
                document.getElementById('inputTalla').classList.remove('is-invalid');
                document.getElementById('inputTalla').classList.add('is-valid');

            } else {
                document.getElementById('inputTalla').classList.remove('is-valid');
                document.getElementById('inputTalla').classList.add('is-invalid');

            }
            break;
        case "inputImagen":
            if (e.target.value !== '') {
                document.getElementById('inputImagen').classList.remove('is-invalid');
                document.getElementById('inputImagen').classList.add('is-valid');

            } else {
                document.getElementById('inputImagen').classList.remove('is-valid');
                document.getElementById('inputImagen').classList.add('is-invalid');

            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

selects.forEach((select) => {
    console.log(select);
    select.addEventListener('blur', validarFormulario);
});*/