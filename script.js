document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector("#grid");

    for(let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
});