document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle"); // Botão da Home
    const logoToggle = document.getElementById("logo-toggle"); // Botão das outras páginas
    const navOverlay = document.getElementById("nav-overlay");
    const navClose = document.getElementById("nav-close");

    // Abre o menu se clicar no Hambúrguer (Home)
    if (menuToggle && navOverlay) {
        menuToggle.addEventListener("click", () => navOverlay.classList.add("is-open"));
    }

    // Abre o menu se clicar na Logo (Diretores, etc)
    if (logoToggle && navOverlay) {
        logoToggle.addEventListener("click", () => navOverlay.classList.add("is-open"));
    }

    // Fecha o menu
    if (navClose && navOverlay) {
        navClose.addEventListener("click", () => navOverlay.classList.remove("is-open"));
    }
});