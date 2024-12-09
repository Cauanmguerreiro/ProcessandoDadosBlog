document.addEventListener('DOMContentLoaded', function () {
    // Escuta o envio do formulário
    document.getElementById('contato-form').addEventListener('submit', function (event) {
        event.preventDefault();  // Previne o comportamento padrão (o envio do formulário)

        // Preenche os dados ocultos (se necessário, conforme a estrutura do Google Forms)
        // O Google Forms já recebe os dados com os campos definidos no HTML (não precisa modificar aqui)

        // Exibe uma mensagem de agradecimento após o envio
        alert('Obrigado pela sua mensagem! Em breve entraremos em contato.');
        
        // Reseta os campos do formulário
        this.reset();
    });
});
