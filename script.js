document.addEventListener("DOMContentLoaded", function () {
    // Função para destacar a página atual na navegação
    highlightCurrentPage();

    // Adiciona comportamento ao formulário
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    // Carregador (loader) ao iniciar o site
    setupLoader();

    // Adiciona hover dinâmico nas imagens da galeria
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img) => {
        img.addEventListener("mouseenter", () => (img.style.transform = "scale(1.1)"));
        img.addEventListener("mouseleave", () => (img.style.transform = "scale(1)"));
    });
});

/**
 * Destaque da página atual na navegação
 */
function highlightCurrentPage() {
    const navLinks = document.querySelectorAll(".header2 ul li a");
    const currentURL = window.location.href;
    navLinks.forEach((link) => {
        if (link.href === currentURL) {
            link.style.color = "#4b2020";
            link.style.fontWeight = "bold";
        }
    });
}

/**
 * Manipula o envio do formulário e exibe a mensagem de sucesso
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value; // Obtém o nome do campo 'nome'

    // Exibe a mensagem de sucesso
    alert(`Formulário enviado com sucesso! Obrigado, ${nome}.`);

    // Opcional: Enviar o formulário após mostrar a mensagem
    // Se você não quiser interromper o envio normal do formulário, use a linha abaixo
    event.target.submit();
}
