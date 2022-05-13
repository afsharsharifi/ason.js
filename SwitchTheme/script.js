document.getElementById("theme-switcher").addEventListener("click", function() {
    let theme = document.getElementById("theme")
    let currentThemeParts = theme.href.split("/")
    let currentTheme = currentThemeParts[currentThemeParts.length - 1]

    if (currentTheme == "style-light.css") {
        theme.href = "./style-dark.css"
    } else if (currentTheme == "style-dark.css") {
        theme.href = "./style-light.css"
    }
});