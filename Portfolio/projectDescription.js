const expandButtons = document.querySelectorAll(".description__button");
const descriptions = document.querySelectorAll(".description");
const toggleableIcons = document.querySelectorAll(".arrow-down");
const sourceButtons = document.querySelectorAll(".project__codeBtn");

function hideDescription(i) {
    toggleableIcons.item(i).classList.replace("arrow-up", "arrow-down");
}

function showDescription(i) {
    toggleableIcons.item(i).classList.replace("arrow-down", "arrow-up");
}

expandButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        if (descriptions.item(i).classList.toggle("description--shown"))
            showDescription(i);
        else
            hideDescription(i);
        sourceButtons.item(i).classList.toggle("project__codeBtn--shown");
    });
    button.addEventListener('mouseover', () => {
        descriptions.item(i).classList.add('description--preview');
    });
    button.addEventListener('mouseout', () => {
        descriptions.item(i).classList.remove('description--preview');
    });
});