export const INITIATE_GRID = "INITIATE_GRID"
export const TOGGLE_CURRENT_ACTIVE_CELLS = "TOGGLE_CURRENT_ACTIVE_CELLS";

export function toggleActive(currentGrid, index){
    const newGrid = currentGrid;
    newGrid[index].active = !newGrid[index].active;
    return {
        type: TOGGLE_CURRENT_ACTIVE_CELLS,
        payload: newGrid
    }
}

export function initiateGrid(rows, columns){
    const rowLen = rows > 0 ? rows : 50; 
    const colLen = columns > 0 ? columns : 50;

    const boxes = [];
   
    // O(n^c) runtime
    for(let r = 1; r <= rowLen; r++) {
        for(let c = 1; c <= colLen; c++){
            // initiating an array of cell potiions
            boxes.push({
                row: r,
                col: c,
                active: false
            });
        }
    }

    return {
        type: INITIATE_GRID, 
        payload: {
            grid: boxes,
            rows: rowLen,
            columns: colLen
        }
    }
}