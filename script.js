const menu_icon = document.querySelector(".menu-icon")
const mobile_nav = document.querySelector(".mobile-navlinks-div")
const body = document.querySelector("body")

menu_icon.addEventListener("click", () => {
    mobile_nav.classList.toggle("display")
    body.classList.toggle("hide-scroll")
})