document.addEventListener("DOMContentLoaded", () => {

    const directorNames = {
        "andre-chitas": "André Chitas",
        "goncalo-xz": "Gonçalo Xz",
        "ines-monteiro": "Inês Monteiro",
        "francisco-ramalho": "Francisco Ramalho"
    };

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
        { id: "1229250084", brand: "Disney+", title: "Disney+", director: "andre-chitas" },
        { id: "1064109149", brand: "GRANADA", title: "From the Heart", director: "andre-chitas" },
        { id: "951206473",  brand: "CCXP", title: "Worlds", director: "andre-chitas" },
        { id: "1075350120", brand: "GRANADA", title: "My Girl", director: "andre-chitas" },
        { id: "1220816532", brand: "FTP", title: "Dakar", director: "goncalo-xz" },
        { id: "1220821289", brand: "Prof Jam", title: "Dakar", director: "goncalo-xz" },
        { id: "1231972605", brand: "Realm", title: "Opo", director: "goncalo-xz" },
        { id: "1220828316", brand: "Conan Osíris", title: "Moleirinha", director: "goncalo-xz" },
        { id: "1231970301", brand: "SlowJ", title: "Champions-League", director: "goncalo-xz" },
        { id: "1229158772", brand: "Mizzy Miles", title: "Fim do Nada", director: "goncalo-xz" },
        { id: "1220835706", brand: "SlowJ", title: "Where u @", director: "goncalo-xz" },
        { id: "1220831743", brand: "Guettop", title: "Ghuettop", director: "goncalo-xz" },
        { id: "1231970990", brand: "Raissa", title: "Pensas em Mim", director: "goncalo-xz" },
        { id: "1228567548", brand: "Mar", title: "Sem Carta", director: "ines-monteiro" },
        { id: "1229123992", brand: "Mar", title: "Old Money", director: "ines-monteiro" },
        { id: "1229125856", brand: "Mar", title: "Livro Aberto", director: "ines-monteiro" },
        { id: "1229127014", brand: "Mar", title: "Graduada", director: "ines-monteiro" },
        { id: "1229127593", brand: "Mar", title: "Old Money", director: "ines-monteiro" },
        { id: "1229129641", brand: "Mar", title: "Atira-te a Mim", director: "ines-monteiro" },
        { id: "1242961944", brand: "Memento Mori", title: "", director: "francisco-ramalho" },
        { id: "1242930562", brand: "Silly", title: "", director: "francisco-ramalho" },
        { id: "1242942830", brand: "Plutónio", title: "", director: "francisco-ramalho" },
        { id: "1242946173", brand: "D-A-M-A", title: "", director: "francisco-ramalho" },
        { id: "1245274838", brand: "Plutónio", title: "", director: "francisco-ramalho" },
        { id: "1245274001", brand: "Plutónio", title: "", director: "francisco-ramalho" },
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }
        return array;
    }
    shuffleArray(videoData);

    const menuBgVideo = document.getElementById("menu-bg-video");
    const mainDirName = document.getElementById("main-dir-name");
    const mainBrandName = document.getElementById("main-brand-name");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentVideoIndex = 0;
    let autoPlayTimer;
    let isAnimating = false;

    menuBgVideo.style.transition = "opacity 0.5s ease";
    mainDirName.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    mainBrandName.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    function startAutoPlay() {
        clearInterval(autoPlayTimer); 
        autoPlayTimer = setInterval(() => {
            if (!isAnimating) updateHomeVideo(currentVideoIndex + 1);
        }, 9000); 
    }

    function updateHomeVideo(index) {
        if (isAnimating) return; 
        isAnimating = true;

        if (index < 0) index = videoData.length - 1;
        if (index >= videoData.length) index = 0;
        
        currentVideoIndex = index;
        const video = videoData[index];
        const dirName = directorNames[video.director] || video.director;

        mainDirName.style.opacity = "0";
        mainBrandName.style.opacity = "0";
        mainDirName.style.transform = "translateX(-50px)";
        mainBrandName.style.transform = "translateX(-50px)";
        menuBgVideo.style.opacity = "0";

        setTimeout(() => {
            menuBgVideo.innerHTML = ""; 
            const iframe = document.createElement("iframe");
            iframe.src = `https://player.vimeo.com/video/${video.id}?background=1&autoplay=1&loop=1&muted=1&api=1&controls=0`;
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
            menuBgVideo.appendChild(iframe);

            // AQUI: Removemos o "Dir.<br>" e deixamos apenas o nome
            mainDirName.innerText = dirName;
            mainBrandName.innerText = video.brand;

            mainDirName.style.transition = "none";
            mainBrandName.style.transition = "none";
            mainDirName.style.transform = "translateX(50px)";
            mainBrandName.style.transform = "translateX(50px)";
            void mainDirName.offsetWidth;

            menuBgVideo.style.transition = "opacity 0.6s ease";
            mainDirName.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            mainBrandName.style.transition = "opacity 0.6s ease, transform 0.6s ease";

            menuBgVideo.style.opacity = "1";
            mainDirName.style.opacity = "1";
            mainBrandName.style.opacity = "1";
            mainDirName.style.transform = "translateX(0)";
            mainBrandName.style.transform = "translateX(0)";

            setTimeout(() => { isAnimating = false; }, 600);
        }, 500); 
    }

    prevBtn.addEventListener("click", () => { updateHomeVideo(currentVideoIndex - 1); startAutoPlay(); });
    nextBtn.addEventListener("click", () => { updateHomeVideo(currentVideoIndex + 1); startAutoPlay(); });

    window.addEventListener("keydown", (e) => {
        const navOverlay = document.getElementById("nav-overlay");
        if (navOverlay && navOverlay.classList.contains("is-open")) return; 
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    updateHomeVideo(0);
    startAutoPlay(); 

    // ... (Player Modal mantém-se igual) ...
    const videoModal = document.getElementById("video-modal");
    const videoModalWrapper = document.getElementById("video-modal-wrapper");
    const videoModalClose = document.getElementById("video-modal-close");
    const videoClickOverlay = document.getElementById("video-click-overlay");
    const videoInfoCenter = document.getElementById("video-info-center");

    function openFullscreenVideo() {
        if (!videoData[currentVideoIndex]) return;
        clearInterval(autoPlayTimer); 
        const videoId = videoData[currentVideoIndex].id;
        videoModalWrapper.innerHTML = `<iframe src="https://player.vimeo.com/video/${videoId}?autoplay=1&muted=0&controls=1" allow="autoplay; fullscreen; picture-in-picture" frameborder="0" allowfullscreen></iframe>`;
        videoModal.classList.add("is-open");
    }

    function closeFullscreenVideo() {
        videoModalWrapper.innerHTML = ""; 
        videoModal.classList.remove("is-open");
        startAutoPlay(); 
    }

    videoClickOverlay.addEventListener("click", openFullscreenVideo);
    if(videoInfoCenter) videoInfoCenter.addEventListener("click", openFullscreenVideo);
    videoModalClose.addEventListener("click", closeFullscreenVideo);
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal || e.target === videoModalWrapper) closeFullscreenVideo();
    });
});