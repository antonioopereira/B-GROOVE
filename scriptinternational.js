document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // DADOS DOS VÍDEOS (INTERNATIONAL)
    // ==========================================
    const videoData = [
        { id: "1208286427", brand: "American Eagle." },
        { id: "1208286424", brand: "American Eagle." }
    ];

    // ==========================================
    // ELEMENTOS
    // ==========================================
    const menuBgVideo = document.getElementById("menu-bg-video");
    const mainBrandName = document.getElementById("main-brand-name");
    
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentVideoIndex = 0;

    // ==========================================
    // LÓGICA DE NAVEGAÇÃO DE VÍDEO (SLIDES)
    // ==========================================
    function updateInternationalVideo(index) {
        if (index < 0) index = videoData.length - 1;
        if (index >= videoData.length) index = 0;
        
        currentVideoIndex = index;
        const video = videoData[index];

        // Carrega o vídeo de fundo (mudo)
        menuBgVideo.innerHTML = ""; 
        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&api=1&controls=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        menuBgVideo.appendChild(iframe);

        // Atualiza o texto central
        mainBrandName.innerText = video.brand;
    }

    // ==========================================
    // EVENTOS DAS SETAS E TECLADO
    // ==========================================
    prevBtn.addEventListener("click", () => {
        updateInternationalVideo(currentVideoIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        updateInternationalVideo(currentVideoIndex + 1);
    });

    window.addEventListener("keydown", (e) => {
        const navOverlay = document.getElementById("nav-overlay");
        if (navOverlay && navOverlay.classList.contains("is-open")) return; 
        
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    // Inicia a página com o primeiro vídeo
    updateInternationalVideo(0);

    // ==========================================
    // PLAYER FULLSCREEN (MODAL)
    // ==========================================
    const videoModal = document.getElementById("video-modal");
    const videoModalWrapper = document.getElementById("video-modal-wrapper");
    const videoModalClose = document.getElementById("video-modal-close");
    const videoClickOverlay = document.getElementById("video-click-overlay");
    const videoInfoCenter = document.getElementById("video-info-center");

    function openFullscreenVideo() {
        if (!videoData[currentVideoIndex]) return;
        const videoId = videoData[currentVideoIndex].id;
        
        // Cria o iframe com som e controlos
        videoModalWrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&controls=1" allow="autoplay; fullscreen; picture-in-picture" frameborder="0" allowfullscreen></iframe>`;
        videoModal.classList.add("is-open");
    }

    function closeFullscreenVideo() {
        videoModalWrapper.innerHTML = ""; 
        videoModal.classList.remove("is-open");
    }

    videoClickOverlay.addEventListener("click", openFullscreenVideo);
    
    if(videoInfoCenter) {
        videoInfoCenter.addEventListener("click", openFullscreenVideo);
    }
    
    videoModalClose.addEventListener("click", closeFullscreenVideo);
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal || e.target === videoModalWrapper) {
            closeFullscreenVideo();
        }
    });

});