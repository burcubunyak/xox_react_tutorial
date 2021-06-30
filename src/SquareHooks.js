import React from 'react';


function SquareHooks(props) {

    const {
        onClick,
        value,
    } = props;

    return (
        <button
            className="square"
            onClick={() => onClick()}
        >
            {value}
        </button>
    );
}


export default SquareHooks;