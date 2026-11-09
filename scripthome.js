document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // MAPEAMENTO DOS DIRETORES
    // ==========================================
    const directorNames = {
        "andre-chitas": "André Chitas",
        "goncalo-xz": "Gonçalo Xz",
        "ines-monteiro": "Inês Monteiro",
        "francisco-ramalho": "Francisco Ramalho"
    };

    // ==========================================
    // DADOS DOS VÍDEOS
    // ==========================================
    const videoData = [
        { id: "1226708222", brand: "McDonald's", title: "Reviews", director: "andre-chitas" },
        { id: "1228562721", brand: "BIS", title: "Rh", director: "andre-chitas" },
        { id: "951206599",  brand: "KitKat", title: "The Town", director: "andre-chitas" },
        { id: "1228563134", brand: "BIS", title: "Interceptação", director: "andre-chitas" },
        { id: "1229244984", brand: "Guaraná", title: "Mãozinha", director: "andre-chitas" },
        { id: "951206509",  brand: "Cobasi", title: "Pets", director: "andre-chitas" },
        { id: "953718810",  brand: "Toyota", title: "Design", director: "andre-chitas" },
        { id: "955961149",  brand: "Toyota", title: "Music", director: "andre-chitas" },
        { id: "951206549",  brand: "Havaianas", title: "Pegada", director: "andre-chitas" },
        { id: "951206647",  brand: "Ampara Animal", title: "Life Print", director: "andre-chitas" },
        { id: "1229250084", brand: "Disney", title: "Disney+", director: "andre-chitas" },
        { id: "1064109149", brand: "GRANADA", title: "From the Heart", director: "andre-chitas" },
        { id: "951206473",  brand: "CCXP", title: "Worlds", director: "andre-chitas" },
        { id: "1075350120", brand: "GRANADA", title: "My Girl", director: "andre-chitas" },
        { id: "1220816532", brand: "Profjam", title: "Dakar", director: "goncalo-xz" },
        { id: "1220821289", brand: "Profjam", title: "Dakar", director: "goncalo-xz" },
        { id: "1231972605", brand: "Realm", title: "Opo", director: "goncalo-xz" },
        { id: "1220828316", brand: "Conan Osíris", title: "Moleirinha", director: "goncalo-xz" },
        { id: "1231970301", brand: "SlowJ feat. GSon & Mizzy Miles", title: "Champions-League", director: "goncalo-xz" },
        { id: "1229158772", brand: "Mizzy Miles feat. T Rex & Zara G", title: "Fim do Nada", director: "goncalo-xz" },
        { id: "1220835706", brand: "SlowJ", title: "Where u @", director: "goncalo-xz" },
        { id: "1220831743", brand: "Project x", title: "Ghuettop", director: "goncalo-xz" },
        { id: "1231970990", brand: "Raissa", title: "Pensas em Mim", director: "goncalo-xz" },
        { id: "1228567548", brand: "Mar", title: "Sem Carta", director: "ines-monteiro" },
        { id: "1229123992", brand: "Mar", title: "Old Money", director: "ines-monteiro" },
        { id: "1229125856", brand: "Kasha feat. Mar", title: "Livro Aberto", director: "ines-monteiro" },
        { id: "1229127014", brand: "Mar", title: "Graduada", director: "ines-monteiro" },
        { id: "1229127593", brand: "Mar", title: "Old Money", director: "ines-monteiro" },
        { id: "1229129641", brand: "Mar", title: "Atira-te a Mim", director: "ines-monteiro" }
    ];

    // ==========================================
    // ELEMENTOS
    // ==========================================
    const menuBgVideo = document.getElementById("menu-bg-video");
    const mainDirName = document.getElementById("main-dir-name");
    const mainBrandName = document.getElementById("main-brand-name");
    
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentVideoIndex = 0;

    // ==========================================
    // LÓGICA DE NAVEGAÇÃO DE VÍDEO (SLIDES)
    // ==========================================
    function updateHomeVideo(index) {
        if (index < 0) index = videoData.length - 1;
        if (index >= videoData.length) index = 0;
        
        currentVideoIndex = index;
        const video = videoData[index];

        menuBgVideo.innerHTML = ""; 
        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&api=1&controls=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        menuBgVideo.appendChild(iframe);

        const dirName = directorNames[video.director] || video.director;
        
        mainDirName.innerHTML = `Dir.<br>${dirName}`;
        mainBrandName.innerText = video.brand;
    }

    // ==========================================
    // EVENTOS DAS SETAS E TECLADO
    // ==========================================
    prevBtn.addEventListener("click", () => {
        updateHomeVideo(currentVideoIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        updateHomeVideo(currentVideoIndex + 1);
    });

    window.addEventListener("keydown", (e) => {
        const navOverlay = document.getElementById("nav-overlay");
        if (navOverlay && navOverlay.classList.contains("is-open")) return; 
        
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    // Inicia a página com o primeiro vídeo
    updateHomeVideo(0);

    // ==========================================
    // PLAYER FULLSCREEN (NOVO)
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
        videoModalWrapper.innerHTML = ""; // Para o vídeo
        videoModal.classList.remove("is-open");
    }

    // Abre ao clicar no fundo
    videoClickOverlay.addEventListener("click", openFullscreenVideo);
    
    // Abre ao clicar no título
    videoInfoCenter.addEventListener("click", openFullscreenVideo);
    
    // Fecha
    videoModalClose.addEventListener("click", closeFullscreenVideo);
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal || e.target === videoModalWrapper) {
            closeFullscreenVideo();
        }
    });

});