import React from 'react';
import styled from 'styled-components';


import CellBox from './cell_box.js';

const Grid = (props) => {
    console.log('GRID RENDER')
    return(
        // grid container
        <GridContainer rows={props.rows} columns={props.columns}>
            {props.grid.map((box, i) => {

                return <CellBox 
                    key={`row: ${box.row}, col: ${box.col}`}
                    position={`row: ${box.row}, col: ${box.col}`}
                    index={i}
                />
            })}
        </GridContainer>

    )
};



export default Grid

// const GridBox = styled.div`
//     box-sizing: border-box;
//     width: 12px;
//     height: 12px;
//     border: 1px solid black;
//     &:hover {
//         background-color: white;
//     }
// `;

const GridContainer = styled.div.attrs(props => ({
        rows: props.rows * 12,
        columns: props.columns * 12
    }))`
    width: ${props => props.rows}px;
    height: ${props => props.columns}px;
    margin: 30px auto;
    background-color: #FAFBFC;
    display: flex;
    flex-wrap: wrap;
`;
