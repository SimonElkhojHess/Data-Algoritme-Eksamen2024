"use strict";

console.log("Hello Me");

// ******** VIEW ********

function createMap()
{

    let map = document.getElementById("map");
    map.innerHTML = "";
    let mapSizeWidth = 24;
    let mapSizeHeight = 24;
    for (let i = 0; i < mapSizeWidth; i++)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < mapSizeHeight; j++)
        {
            let cell = document.createElement("div");
            cell.calssList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            row.appendChild(cell);
        }
        map.appendChild(row);
    }

}