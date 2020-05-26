import React from 'react';
import { connect } from 'react-redux';

const ControlBar = (props) => {

    return(
        <div>
            <button>Start</button>
        </div>
    )
};

export default connect(null, {})(ControlBar)