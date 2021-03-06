import React from 'react';
import SquareHooks from './SquareHooks';


function BoardHooks(props) {

    const {
        onClick,
        squares,
    } = props;

    const renderSquare = (i) => {
        return (
            <SquareHooks
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default BoardHooks;