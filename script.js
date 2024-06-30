document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector("#grid");

    function createGrid(gridSize) {
        
        gridContainer.innerHTML = "";

        const rows = gridSize;
        const columns = gridSize;

      
        const containerWidth = gridContainer.clientWidth;
        const totalPadding = 8;
        const totalBorder = 2 * gridSize;
        const gridItemSize = (containerWidth - totalPadding - totalBorder) / gridSize;

        const itemWidth = `${gridItemSize}px`;
        const itemHeight = `${gridItemSize}px`;
        const rainbowMode = document.querySelector("#rainbow");

        // const containerWidth = gridContainer.clientWidth;
        // const gridItemSize = (containerWidth - 4 * (gridSize - 1)) / gridSize; 

        for (let i = 0; i < rows * columns; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.width = itemWidth;
            gridItem.style.height = itemHeight;
            // gridItem.style.width = `${gridItemSize}px`;
            // gridItem.style.height = `${gridItemSize}px`;
            gridContainer.appendChild(gridItem);
            gridItem.addEventListener('mouseover', () => {
                if (rainbowMode.checked) {
                    gridItem.style.backgroundColor = getRandomColor();
                } else {gridItem.style.backgroundColor = "black";
                }
        })
        }
    }

    createGrid(16);


    const newBtn = document.querySelector("#new-btn");
    newBtn.addEventListener("click", function() {
        let gridSizeInput = prompt("Enter desired grid size (1-100):");

        if (gridSizeInput === null) {
            return; 
        }

        let gridSize = parseInt(gridSizeInput);
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert("Please enter a valid number from 1 to 100.");
            return;
        }

        createGrid(gridSize);
    });

});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
}

