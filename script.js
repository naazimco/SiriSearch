document.addEventListener("DOMContentLoaded", () => {
    // Menu Dropdown
    const menuButton = document.getElementById("menuButton");
    const menuDropdown = document.getElementById("menuDropdown");

    menuButton.addEventListener("click", (event) => {
        menuDropdown.classList.toggle("show");
        event.stopPropagation(); // Prevent immediate close
    });

    document.addEventListener("click", () => menuDropdown.classList.remove("show"));

    // Modal Functionality
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

    // Dark Mode Toggle
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

    // Language Selector
    const languageButton = document.getElementById("languageButton");
    const languageOptions = document.getElementById("languageOptions");

    languageButton.addEventListener("click", (event) => {
        languageOptions.classList.toggle("show");
        languageButton.classList.toggle("open");
        event.stopPropagation(); // Prevent document click from closing the dropdown
    });

    document.addEventListener("click", () => {
        languageOptions.classList.remove("show");
        languageButton.classList.remove("open");
    });

    // Search Form Submission
    document.getElementById("searchForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const query = document.getElementById("searchInput").value.trim();
        if (query) {
            try {
                const results = await fetchSearchResults(query);
                console.log("Results fetched:", results);
                displaySearchResults(results);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    });
});
