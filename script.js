const menu_icon = document.querySelector(".menu-icon")
const mobile_nav = document.querySelector(".mobile-navlinks-div")
const mobile_nav_div = document.querySelector(".mobile-nav-links")
const close_icon = document.querySelector(".close-icon")

const overlay = document.querySelector(".overlay")

menu_icon.addEventListener("click", () => {
    mobile_nav.classList.remove("display")
    mobile_nav_div.classList.remove("display")
    menu_icon.classList.add("display")
    close_icon.classList.remove("display")
})

close_icon.addEventListener("click", () => {
    mobile_nav.classList.add("display")
    mobile_nav_div.classList.add("display")
    menu_icon.classList.remove("display")
    close_icon.classList.add("display")
})