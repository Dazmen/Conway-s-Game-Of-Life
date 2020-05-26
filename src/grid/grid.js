import React from 'react';
import styled from 'styled-components';


import GridBox from './grid_box.js';

const Grid = (props) => {
    
    
    return(
        // grid container
        <GridContainer rows={props.rows} columns={props.columns}>
            {props.grid.map(box => {
                return <GridBox 
                    key={`row: ${box.row}, col: ${box.col}`}
                    position={`row: ${box.row}, col: ${box.col}`}
                    active={box.active}
                />
            })}
        </GridContainer>

    )
};



export default Grid

const GridContainer = styled.div.attrs(props => ({
        rows: props.rows * 12,
        columns: props.columns * 12
    }))`
    width: ${props => props.rows}px;
    height: ${props => props.columns}px;
    margin: 30px auto;
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
`;
