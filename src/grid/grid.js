import React from 'react';
import styled from 'styled-components';

import GridBox from './grid_box.js';

const Grid = () => {
    // first step is to render a 50x50 grid
    const rowLen = 50; // will eventually set to redux state, for variable presets
    const colLen = 50; // will eventually set to redux state, for variable presets

    const boxes = [];
   
    // O(n^c) runtime
    for(let r = 1; r <= rowLen; r++) {
        for(let c = 1; c <= colLen; c++){
            // initiating an array of cell potiions
            boxes.push({
                row: r,
                col: c
            });
        }
    }
    

    return(
        // grid container
        <GridContainer colLen={colLen}>
            {boxes.map(box => {
                return <GridBox 
                    key={`row: ${box.row}, col: ${box.col}`}
                    position={`row: ${box.row}, col: ${box.col}`}
                />
            })}
        </GridContainer>

    )
};

export default Grid

const GridContainer = styled.div`
    width: 500px;
    height: 500px;
    margin: 30px auto;
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
`;
