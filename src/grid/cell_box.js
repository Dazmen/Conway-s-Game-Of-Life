import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleActive } from '../redux/actions/gridActions.js';

const CellBox = (props) => {
    // Below is used to force the box component to update. For some reason, even though the the grid prop changed, it would not rerender with its active bool toggled
    const [ _, forceUpdate ] = useState();
    const { position, index, grid, toggleActive} = props;
    console.log('BOX RENDER')

    const active = grid[index].active;

    if (active) {
        return (
            <BoxActive 
                onClick={() => {
                    console.log(position)
                    toggleActive(grid, index)
                    forceUpdate([])
                }}
            />
        )
    } else {
        return (
            <Box 
                onClick={() => {
                    console.log(position)
                    toggleActive(grid, index)
                    forceUpdate({})
                }}
            />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        grid: state.current_grid_gen
    }
}

export default connect(mapStateToProps, {toggleActive})(CellBox);

const BoxActive = styled.div`
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    background-color: black;
    &:hover {
        background-color: blue;
    }
`;

const Box = styled.div`
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    &:hover {
        background-color: blue;
    }
`;