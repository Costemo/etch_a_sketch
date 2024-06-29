// document.addEventListener('DOMContentLoaded', function() {
//     const gridContainer = document.querySelector("#grid");

//     function createGrid(rows, colums) {

//         gridContainer.innerHTML = "";

//         gridSize = gridSize || 16;
//         gridSize = Math.min(Math.max(gridSize, 1), 100);

//         const containerWidth = gridContainer.clientWidth;
//         const gridItemSize = (containerWidth - 4 * (gridSize - 1)) / gridSize;

//         for(let i = 0; i < gridSize * gridSize; i++) {
//             const gridItem = document.createElement("div");
//             gridItem.classList.add("grid-item");
//             gridItem.style.width = `${gridItemSize}px`;
//             gridItem.style.height = `${gridItemSize}px`;
//             gridContainer.appendChild(gridItem);
//         }
//     }

//     createGrid(16, 16);

//     const newBtn = document.querySelector("#new-btn");
//     newBtn.addEventListener("click", function() {
//         let rows = prompt("Enter desired number of rows (1-100):");
//         let columns = prompt("Enter desired number of columns (1-100):");

//         if (rows === null || columns === null) {
//             return; // User clicked cancel
//         }

//         rows = parseInt(rows);
//         columns = parseInt(columns);

//         if (isNaN(rows) || isNaN(columns) || rows < 1 || columns < 1 || rows > 100 || columns > 100) {
//             alert("Please enter valid numbers from 1 to 100.");
//             return;

//     }})

// });

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
                gridItem.style.backgroundColor = "black";
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


