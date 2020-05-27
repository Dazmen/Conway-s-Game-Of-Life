import { INITIATE_GRID,
    TOGGLE_CURRENT_ACTIVE_CELLS } from '../actions/gridActions.js';

const initialState = {
    current_grid_gen: [],
    prev_grid_gen: [],
    next_grid_gen: [],
    total_gens: 0,
    columns: 0,
    rows: 0
};

const gridReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_GRID:
            return {
                ...state,
                rows: action.payload.rows,
                columns: action.payload.columns,
                current_grid_gen: action.payload.grid
            }
        case TOGGLE_CURRENT_ACTIVE_CELLS:
            return {
                ...state,
                current_grid_gen: action.payload
            }
        default:
            return state
    }
}

export default gridReducer