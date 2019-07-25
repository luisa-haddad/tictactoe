import * as React from 'react';
import { GridType } from '../useTicTacToe';

export const Score = (IProps:any) => {
    const grid = IProps.grid;
    const setClean = IProps.setClean
    const oneGrid:any = []
    const grids = oneGrid.concat(grid[0], grid[1], grid[2])

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
    
        if (grids[a] && grids[a] === grids[b] && grids[a] === grids[c]) {
            setClean(true)
            return (
                <p>The winner is {grids[a]}</p>
            )
        }
    }
    return null;

};

interface IProps {
    grid: GridType,
    setClean: any
}