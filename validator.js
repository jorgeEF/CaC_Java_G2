// obtener el formulario
const formulario = document.getElementById('formulario')

// capturamos de evento submit para validar los campos
formulario.addEventListener('submit', evento => {
    // detener envio hasta validar
    evento.preventDefault();
    // validar campos y enviar
    if(validarFormulario()){
        formulario.submit();
    }
})

// funcion para mostrar un mensaje de error al no completar campo
function mostrarError(campo, mensaje){
    const campoError = document.getElementById(`${campo}-error`);
    campoError.innerText = mensaje;
}

// funcion para validar email usando regex
function validarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

// funcion para validar datos de campos
function validarFormulario() {
    // obtener valores de los campos    
    const nombre = document.getElementById('inputNombre').value
    const apellido = document.getElementById('inputApellido').value
    const asunto = document.getElementById('inputAsunto').value
    const mensajeContacto = document.getElementById('inputMensaje').value
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    const robotCheck = document.getElementById('robotCheck').value

    // validar cada campo
    if(nombre === ''){
        mostrarError('nombre','Por favor ingresa tu nombre')
        return false;
    }

    if(apellido === ''){
        mostrarError('apellido','Por favor ingresa tu apellido')
        return false;
    }

    if(asunto === ''){
        mostrarError('asunto','Por favor ingresa el asunto')
        return false;
    }

    if(mensajeContacto === ''){
        mostrarError('mensajeContacto','Por favor ingresa un mensaje')
        return false;
    }

    if(email === ''){
        mostrarError('email','Por favor ingresa tu email')
        return false;
    }
    if(!validarEmail(email)){
        mostrarError('email','Por favor ingresa un email válido')
        return false;
    }

    if(password === ''){
        mostrarError('password','Contraseña/usuario incorrecta')
        return false;
    }

    if(robotCheck !== true){
        mostrarError('robot','No se pudo validar que no es un robot')
        return false;
    }

    return true;


}