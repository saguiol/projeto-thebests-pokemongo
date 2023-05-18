const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const buttonChangeImage = document.querySelector(".button-image")

changeThemeButton.addEventListener("click", () => {
    const darkModeOn = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkModeOn) {
        buttonChangeImage.setAttribute("src", "./src/imagens/lunala.png")
    } else {
        buttonChangeImage.setAttribute("src", "./src/imagens/solgaleo.png")
    }
});