// Executa somente quando a página já foi carregada.
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formCadastro');
    if (!formulario) return; // Nas outras páginas não existe formulário.

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede que a página recarregue.

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const interesse = document.getElementById('interesse').value;
        const mensagem = document.getElementById('mensagem');

        if (nome.length < 3 || !email.includes('@') || interesse === '') {
            mensagem.textContent = 'Confira os dados e preencha todos os campos.';
            mensagem.style.color = '#b91c1c';
            return;
        }

        // Apenas demonstração: os dados ficam neste navegador.
        const cadastro = { nome: nome, email: email, interesse: interesse };
        localStorage.setItem('cadastroNexus', JSON.stringify(cadastro));

        mensagem.textContent = 'Cadastro de demonstração realizado com sucesso, ' + nome + '!';
        mensagem.style.color = '#15803d';
        formulario.reset();
    });
});