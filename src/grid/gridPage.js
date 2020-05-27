import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from './grid';
import ControlBar from './controlBar';

import { initiateGrid } from '../redux/actions/gridActions.js';

const GridPage = (props) => {
    const { initiateGrid, rows, columns, grid } = props;
    console.log('PAGE RENDER')

    useEffect(() => {
        initiateGrid(rows, columns);
    }, [rows, columns])

    return (
        <div>
            {grid.length > 0 
                ? <Grid grid={grid} 
                    rows={rows} 
                    columns={columns}
                    />
                : null }
            <ControlBar />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        grid: state.current_grid_gen,
        rows: state.rows,
        columns: state.columns
    }
};

export default connect(mapStateToProps, {initiateGrid})(GridPage);