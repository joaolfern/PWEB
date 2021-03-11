const hiddenProjects = document.querySelectorAll(".hidden");
const expandButton = document.querySelector(".project__expandBtn");
const projectContainer = document.querySelector(".projects");
let on = true;

expandButton.addEventListener("click", () => {
    if (on) {
        projectContainer.classList.add("toggledOn")
        projectContainer.classList.remove("toggledOff")
    }
    else {
        document.location = "#project-section";
        projectContainer.classList.add("toggledOff");
        projectContainer.classList.remove("toggledOn");
    }
    expandButton.textContent = on ? "mostrar menos" : "mostrar mais";

    on = !on;
})