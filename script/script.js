// 
function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

// Função que verifica através de condição se a função validarFormulario retorna isValid e chama a função enviarParaWhatsapp
function enviarFormulario() {
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}

// Função que recolhe os dados inseridos nos inputs HTML e os insere em um texto que será enviado ao ser chamada
function enviarParaWhatsApp() {
    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const phone = document.getElementById('input-phone').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;

    const text = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\nMensagem: ${message}`;
    const textEncoded = encodeURIComponent(text);
    const numberWhatsApp = '5581994183998';
    const url = `https://wa.me/${numberWhatsApp}?text=${textEncoded}`;

    window.open(url, '_blank');
}