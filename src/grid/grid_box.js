import React from 'react';
import styled from 'styled-components';

const GridBox = (props) => {
    


    return (
        <Box 
            onClick={() => {
                console.log(props.position)
               
            }}
        />
    )
};

export default GridBox;


const Box = styled.div`
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    &:hover {
        background-color: white;
    }
`;