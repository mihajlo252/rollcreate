const navControls = document.querySelector(".nav-controls");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hero = document.querySelector(".hero")

navToggle.addEventListener("click", () => {
    const visibility = navControls.getAttribute("data-visible");

    if (visibility === "false") {
        navControls.setAttribute("data-visible", true);
        navToggle.classList.add("nav-toggle-closed");
    } else {
        navControls.setAttribute("data-visible", false);
        navToggle.classList.remove("nav-toggle-closed");
    }
});

hero.addEventListener("click", () => {
    navControls.setAttribute("data-visible", false);
    navToggle.classList.remove("nav-toggle-closed");
})


