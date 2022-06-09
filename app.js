const navControls = document.querySelector(".nav-controls")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    const visibility = navControls.getAttribute('data-visible')

    if (visibility === "false") {
        navControls.setAttribute('data-visible', true)
    } else {
        navControls.setAttribute('data-visible', false)
    }
    

})

