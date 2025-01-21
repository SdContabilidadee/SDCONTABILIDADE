document.addEventListener("DOMContentLoaded", function () {
    // Função para destacar a página atual na navegação
    highlightCurrentPage();

    // Adiciona comportamento ao formulário
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    // Inicializa o carregador (loader) ao iniciar o site
    setupLoader();

    // Adiciona hover dinâmico nas imagens da galeria
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img) => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
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
 * Inicializa o carregador (loader)
 */
function setupLoader() {
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.style.position = "fixed";
    loader.style.top = "0";
    loader.style.left = "0";
    loader.style.width = "100%";
    loader.style.height = "100%";
    loader.style.background = "rgba(255, 255, 255, 0.8)";
    loader.style.zIndex = "1000";
    loader.style.display = "flex";
    loader.style.justifyContent = "center";
    loader.style.alignItems = "center";
    loader.innerText = "Carregando...";
    document.body.appendChild(loader);

    // Simula o tempo de carregamento e remove o loader após 2 segundos
    setTimeout(() => {
        loader.remove();
    }, 2000);
}

/**
 * Manipula o envio do formulário e exibe a mensagem de sucesso
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome")?.value; // Obtém o nome do campo 'nome'
    if (!nome) {
        alert("Por favor, preencha o campo nome.");
        return;
    }

    // Exibe a mensagem de sucesso
    alert(`Formulário enviado com sucesso! Obrigado, ${nome}.`);

    // Opcional: Enviar o formulário após mostrar a mensagem
    event.target.submit();
}
