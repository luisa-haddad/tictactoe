import * as React from 'react';
import cns from 'classnames';

import { useTicTacToe, CellValues } from '../useTicTacToe';
import { Score } from './Score';
import { Grid } from './Grid.styled';
import { Cell } from './Cell.styled';


export const App: React.FC = () => {
  const [grid, handlePlay] = useTicTacToe();
  console.log(grid, 'teste')
  return (
    <React.Fragment>
      {/* <Score grid={grid}/> */}
      <Grid>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={`${rowIndex}-${cellIndex}`}
                onClick={() => {
                  handlePlay({ row: rowIndex, cell: cellIndex });
                }}
                className={cns({
                  x: cell === CellValues.X,
                  o: cell === CellValues.O,
                })}
              >
                {cell !== CellValues.Empty && cell}
              </Cell>
            ))}
          </tr>
        ))} 
      </Grid>
    </React.Fragment>
  );
};
