const themeToggle = document.querySelector(".theme-toggle");

// Configura o tema baseado no salvamento ou pelo padrão do sistema
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.watchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme == "dark" || (!savedTheme && systemPrefersDark);
    document.bosy.classList.toggle("adrk-theme", isDarkTheme);
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"
})

// Troca entre tema claro e escuro
const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"
}
themeToggle.addEventListener("click", toggleTheme)