const menu_icon = document.querySelector(".menu-icon")
const mobile_nav = document.querySelector(".mobile-navlinks-div")

menu_icon.addEventListener("click", () => {
    mobile_nav.classList.toggle("display")
})