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
        { id: "1226708222", brand: "McDonald's", title: "Reviews", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-01.webp" },
        { id: "1228562721", brand: "BIS", title: "Rh", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-02.webp" },
        { id: "951206599",  brand: "KitKat", title: "The Town", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-03.webp" },
        { id: "1228563134", brand: "BIS", title: "Interceptação", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-11.webp" },
        { id: "1229244984", brand: "Guaraná", title: "Mãozinha", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-13.webp" },
        { id: "951206509",  brand: "Cobasi", title: "Pets", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-04.webp" },
        { id: "953718810",  brand: "Toyota", title: "Design", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-05.webp" },
        { id: "955961149",  brand: "Toyota", title: "Music", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-06.webp" },
        { id: "951206549",  brand: "Havaianas", title: "Pegada", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-12.webp" },
        { id: "951206647",  brand: "Ampara Animal", title: "Life Print", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-09.webp" },
        { id: "1229250084", brand: "Disney", title: "Disney+", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-14.webp" },
        { id: "1064109149", brand: "GRANADA", title: "From the Heart", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-08.webp" },
        { id: "951206473",  brand: "CCXP", title: "Worlds", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-10.webp" },
        { id: "1075350120", brand: "GRANADA", title: "My Girl", director: "andre-chitas", Thumb: "images/andre-chitas/imagem-07.webp" },
        { id: "1220816532", brand: "FTP", title: "Dakar", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-13.webp" },
        { id: "1220821289", brand: "Profjam", title: "Dakar", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-14.webp" },
        { id: "1231972605", brand: "Realm", title: "Opo", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-a.webp" },
        { id: "1220828316", brand: "Conan Osíris", title: "Moleirinha", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-17.webp" },
        { id: "1231970301", brand: "SlowJ feat. GSon & Mizzy Miles", title: "Champions-League", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-b.webp" },
        { id: "1229158772", brand: "Mizzy Miles feat. T Rex & Zara G", title: "Fim do Nada", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-15.webp" },
        { id: "1220835706", brand: "SlowJ", title: "Where u @", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-18.webp" },
        { id: "1220831743", brand: "Project x", title: "Ghuettop", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-16.webp" },
        { id: "1231970990", brand: "Raissa", title: "Pensas em Mim", director: "goncalo-xz", Thumb: "images/goncalo-xz/imagem-c.webp" },
        { id: "1228567548", brand: "Mar", title: "Sem Carta", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-24.webp" },
        { id: "1229123992", brand: "Mar", title: "Old Money", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-20.webp" },
        { id: "1229125856", brand: "Kasha feat. Mar", title: "Livro Aberto", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-22.webp" },
        { id: "1229127014", brand: "Mar", title: "Graduada", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-21.webp" },
        { id: "1229127593", brand: "Mar", title: "Old Money", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-23.webp" },
        { id: "1229129641", brand: "Mar", title: "Atira-te a Mim", director: "ines-monteiro", Thumb: "images/ines-monteiro/imagem-19.webp" },
        { id: "1242961944", brand: "Memento Mori", title: "", director: "francisco-ramalho" },
        { id: "1242930562", brand: "Silly", title: "", director: "francisco-ramalho" },
        { id: "1242942830", brand: "Plutónio", title: "", director: "francisco-ramalho" },
        { id: "1242946173", brand: "D-A-M-A", title: "", director: "francisco-ramalho" },
        { id: "1245274838", brand: "Plutónio", title: "", director: "francisco-ramalho" },
        { id: "1245274001", brand: "Plutónio", title: "", director: "francisco-ramalho" } 
    ];

    // ==========================================
    // ELEMENTOS
    // ==========================================
    const submenu = document.getElementById("directors-submenu");
    const menuBgVideo = document.getElementById("menu-bg-video");
    
    const directorView = document.getElementById("director-view");
    const mainIframeWrapper = document.getElementById("main-iframe-wrapper");
    const mainDirName = document.getElementById("main-dir-name");
    const mainBrandName = document.getElementById("main-brand-name");
    
    const carouselTrack = document.getElementById("director-carousel-track");
    const directorLinks = document.querySelectorAll(".director-link");
    
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const backToMenuBtn = document.getElementById("back-to-menu");

    let currentDirectorVideos = [];
    let carouselItems = [];
    let activeIframe = null;
    let carouselAnimId = null;
    let currentVideoIndex = 0;

    // ==========================================
    // ESCONDER O BOTÃO INICIALMENTE
    // ==========================================
    if (backToMenuBtn) {
        backToMenuBtn.classList.add("is-hidden");
    }

    // ==========================================
    // VÍDEO DE FUNDO ALEATÓRIO (MENU)
    // ==========================================
    function playRandomMenuBackground() {
        menuBgVideo.innerHTML = ""; 
        const randomVideo = videoData[Math.floor(Math.random() * videoData.length)];
        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${randomVideo.id}?background=1&autoplay=1&loop=1&muted=1&api=1&controls=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        menuBgVideo.appendChild(iframe);
    }
    playRandomMenuBackground();

    // ==========================================
    // INICIAR VISÃO DO DIRETOR
    // ==========================================
    function startDirectorView(directorId) {
        currentDirectorVideos = videoData.filter(v => v.director === directorId);
        if (currentDirectorVideos.length === 0) return;

        carouselTrack.innerHTML = "";
        carouselItems = [];
        if (activeIframe) activeIframe.remove();

        currentDirectorVideos.forEach((video, index) => {
            const item = document.createElement("div");
            item.classList.add("carousel-item");
            
            const img = document.createElement("img");
            img.src = video.Thumb || `https://vumbnail.com/${video.id}.jpg`;
            img.classList.add("poster-preview");
            item.appendChild(img);
            
            item.addEventListener("click", () => {
                updateMainVideo(index);
                snapCarouselTo(index);
            });

            carouselTrack.appendChild(item);
            carouselItems.push(item);
        });

        if (currentDirectorVideos.length > 1) {
            prevBtn.classList.remove("hidden");
            nextBtn.classList.remove("hidden");
        } else {
            prevBtn.classList.add("hidden");
            nextBtn.classList.add("hidden");
        }

        gsap.to([submenu, menuBgVideo], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                submenu.style.display = "none";
                menuBgVideo.style.display = "none";
                
                directorView.classList.add("active");
                
                // Mostrar o botão Back to directors
                if (backToMenuBtn) backToMenuBtn.classList.remove("is-hidden");

                initCarousel();
                updateMainVideo(0);
                snapCarouselTo(0);
            }
        });
    }

    // ==========================================
    // VOLTAR AOS DIRETORES
    // ==========================================
    backToMenuBtn.addEventListener("click", () => {
        gsap.to(directorView, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                directorView.classList.remove("active");
                directorView.style.opacity = 1; 
                
                // Esconder o botão Back to directors
                if (backToMenuBtn) backToMenuBtn.classList.add("is-hidden");

                if (activeIframe) {
                    activeIframe.remove();
                    activeIframe = null;
                }

                submenu.style.display = "flex";
                menuBgVideo.style.display = "block";
                playRandomMenuBackground(); 

                gsap.to([submenu, menuBgVideo], {
                    opacity: 1,
                    duration: 0.5
                });
            }
        });
    });

    // ==========================================
    // ATUALIZAR VÍDEO PRINCIPAL
    // ==========================================
    function updateMainVideo(index) {
        if (index < 0 || index >= currentDirectorVideos.length) return;
        
        currentVideoIndex = index; 

        const video = currentDirectorVideos[index];
        const dirName = directorNames[video.director] || video.director;
        
        mainDirName.innerHTML = `Dir.<br>${dirName}`;
        mainBrandName.innerText = video.brand;

        if (activeIframe) activeIframe.remove();
        
        const iframe = document.createElement("iframe");
        iframe.src = `https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&api=1&controls=0`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        
        mainIframeWrapper.appendChild(iframe);
        activeIframe = iframe;

        carouselItems.forEach((item, i) => {
            if (i === index) item.classList.add("active-item");
            else item.classList.remove("active-item");
        });
    }

    // ==========================================
    // CONTROLO DAS SETAS DO VÍDEO E TECLADO
    // ==========================================
    prevBtn.addEventListener("click", () => {
        let newIndex = currentVideoIndex - 1;
        if (newIndex < 0) newIndex = currentDirectorVideos.length - 1;
        updateMainVideo(newIndex);
        snapCarouselTo(newIndex);
    });

    nextBtn.addEventListener("click", () => {
        let newIndex = currentVideoIndex + 1;
        if (newIndex >= currentDirectorVideos.length) newIndex = 0;
        updateMainVideo(newIndex);
        snapCarouselTo(newIndex);
    });

    window.addEventListener("keydown", (e) => {
        if (!directorView.classList.contains("active")) return;
        
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    // ==========================================
    // LÓGICA DO CARROSSEL (FLUIDEZ E CAMINHO CURTO)
    // ==========================================
    let carouselCurrentScroll = 0;
    let carouselTargetScroll = 0;

    function getCarouselStep() {
        return window.innerWidth * 0.11; 
    }

    function snapCarouselTo(index) {
        const step = getCarouselStep();
        const n = carouselItems.length;
        if (n === 0) return;

        const totalLoop = n * step;
        const currentScroll = carouselCurrentScroll;
        
        const currentBase = Math.floor(currentScroll / totalLoop) * totalLoop;
        const currentPosInLoop = currentScroll - currentBase;
        
        let targetPosInLoop = index * step;
        let diff = targetPosInLoop - currentPosInLoop;
        
        if (diff > totalLoop / 2) {
            diff -= totalLoop;
        } else if (diff < -totalLoop / 2) {
            diff += totalLoop;
        }
        
        carouselTargetScroll = currentScroll + diff;
    }

    function initCarousel() {
        if (carouselAnimId) cancelAnimationFrame(carouselAnimId);
        
        carouselCurrentScroll = 0;
        carouselTargetScroll = 0;
        
        const step = getCarouselStep();
        const n = carouselItems.length;
        const T = n * step; 

        function render() {
            carouselCurrentScroll += (carouselTargetScroll - carouselCurrentScroll) * 0.08;

            if (Math.abs(carouselCurrentScroll) > T * 10) {
                const shift = Math.floor(carouselCurrentScroll / T) * T;
                carouselCurrentScroll -= shift;
                carouselTargetScroll -= shift;
            }

            carouselItems.forEach((item, i) => {
                let x = (i * step) - carouselCurrentScroll;
                x = ((x + T / 2) % T + T) % T - T / 2;

                const absX = Math.abs(x);
                const norm = absX / step; 
                
                if (norm > 1.5) {
                    item.style.display = 'none'; 
                } else {
                    item.style.display = 'block';
                    const scale = Math.max(0.7, 1 - (norm * 0.3)); 
                    const zIndex = Math.round(100 - norm * 10);
                    
                    item.style.transform = `translate(-50%, -50%) translateX(${x * 0.85}px) scale(${scale})`;
                    item.style.zIndex = zIndex;
                    item.style.opacity = Math.max(0.4, 1 - (norm * 0.6));
                }
            });

            carouselAnimId = requestAnimationFrame(render);
        }
        
        render();
    }

    // ==========================================
    // CLICKS NOS NOMES DOS DIRETORES
    // ==========================================
    directorLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const directorId = link.dataset.director;
            startDirectorView(directorId);
        });
    });

    // ==========================================
    // PLAYER FULLSCREEN (MODAL)
    // ==========================================
    const videoModal = document.getElementById("video-modal");
    const videoModalWrapper = document.getElementById("video-modal-wrapper");
    const videoModalClose = document.getElementById("video-modal-close");
    const videoClickOverlay = document.getElementById("video-click-overlay");
    const videoInfoCenter = document.getElementById("video-info-center");

    function openFullscreenVideo() {
        if (!currentDirectorVideos[currentVideoIndex]) return;
        const videoId = currentDirectorVideos[currentVideoIndex].id;
        
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