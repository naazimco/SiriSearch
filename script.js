document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuButton.addEventListener("click", (event) => {
        menuDropdown.classList.toggle("show");
        event.stopPropagation();
    });

    document.addEventListener("click", () => menuDropdown.classList.remove("show"));

    const aboutModal = document.getElementById("aboutModal");
    const modalOverlay = document.createElement("div");
    modalOverlay.className = "modal-overlay";
    document.body.appendChild(modalOverlay);

    const aboutModalButton = document.getElementById("aboutModalButton");
    const closeModal = document.getElementById("closeModal");

    aboutModalButton.addEventListener("click", () => {
        aboutModal.classList.add("show");
        modalOverlay.classList.add("show");
        document.body.classList.add("modal-open");
    });

    closeModal.addEventListener("click", () => {
        aboutModal.classList.remove("show");
        modalOverlay.classList.remove("show");
        document.body.classList.remove("modal-open");
    });

    modalOverlay.addEventListener("click", () => {
        aboutModal.classList.remove("show");
        modalOverlay.classList.remove("show");
        document.body.classList.remove("modal-open");
    });

    const darkModeToggle = document.getElementById("darkModeToggle");
    const html = document.documentElement;
    const savedTheme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    html.setAttribute("data-theme", savedTheme);

    darkModeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    const languageButton = document.getElementById("languageButton");
    const languageOptions = document.getElementById("languageOptions");

    languageButton.addEventListener("click", (event) => {
        languageOptions.classList.toggle("show");
        languageButton.classList.toggle("open");
        event.stopPropagation();
    });

    document.addEventListener("click", () => {
        languageOptions.classList.remove("show");
        languageButton.classList.remove("open");
    });

    // 🔹 Define translations for different languages
    const translations = {
        en: {
            title: "Siri Search",
            aboutText: "Siri Search was created by <a href='https://naazim.co'>NaazimCo</a>. <br/> Inspired by <a href='https://www.behance.net/gallery/106872087/Siri-Search-Engine-Concept'>Parker Ortolani's concept</a>. <br/> ©2025 NaazimCo Web Design and Apple Inc <br/> Not affiliated with Apple in any way.",
            searchPlaceholder: "Search the web",
            searchMaps: "Search Maps",
            searchApple: "Search Apple",
            aboutTitle: "About  Siri Search",
            toggleAppearance: "Toggle Appearance",
            aboutButton: "About  Siri Search",
            languageLabel: "Language",
        },
        es: {
            title: "Búsqueda de Siri",
            aboutText: "Siri Search fue creado por <a href='https://naazim.co'>NaazimCo</a>. <br/> Inspirado por el concepto de <a href='https://www.behance.net/gallery/106872087/Siri-Search-Engine-Concept'>Parker Ortolani</a>. <br/> ©2025 NaazimCo Web Design y Apple Inc <br/> No está afiliado a Apple de ninguna manera.",
            searchPlaceholder: "Buscar en la web",
            searchMaps: "Buscar Mapas",
            searchApple: "Buscar en Apple",
            aboutTitle: "Acerca de  Búsqueda de Siri",
            toggleAppearance: "Alternar Apariencia",
            aboutButton: "Acerca de  Búsqueda de Siri",
            languageLabel: "Idioma",
        },
        fr: {
            title: "Recherche Siri",
            aboutText: "Siri Search a été créé par <a href='https://naazim.co'>NaazimCo</a>. <br/> Inspiré par le concept de <a href='https://www.behance.net/gallery/106872087/Siri-Search-Engine-Concept'>Parker Ortolani</a>. <br/> ©2025 NaazimCo Web Design et Apple Inc <br/> N'est pas affilié à Apple de quelque manière que ce soit.",
            searchPlaceholder: "Rechercher sur le Web",
            searchMaps: "Rechercher sur Maps",
            searchApple: "Rechercher sur Apple",
            aboutTitle: "À propos de  Recherche Siri",
            toggleAppearance: "Changer d’apparence",
            aboutButton: "À propos de  Recherche Siri",
            languageLabel: "Langue",
        }
    };

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    function setLanguage(lang) {
        localStorage.setItem("language", lang);

        document.querySelector(".title").textContent = translations[lang].title;
        document.querySelector(".about-text").innerHTML = translations[lang].aboutText;
        document.getElementById("searchInput").setAttribute("placeholder", translations[lang].searchPlaceholder);
        document.querySelector(".search-maps").textContent = translations[lang].searchMaps;
        document.querySelector(".search-apple").textContent = translations[lang].searchApple;
        document.querySelector(".about-title").textContent = translations[lang].aboutTitle;
        document.querySelector(".toggle-appearance").textContent = translations[lang].toggleAppearance;
        document.querySelector(".about-button").textContent = translations[lang].aboutButton;
        document.querySelector(".language-label").textContent = translations[lang].languageLabel;
    }

    document.querySelectorAll(".language-option").forEach((option) => {
        option.addEventListener("click", (event) => {
            const selectedLanguage = event.target.getAttribute("data-lang");
            setLanguage(selectedLanguage);
        });
    });
});
