import { useState, useCallback } from 'react';
//import { Score } from './components/Score';

export enum CellValues {
  Empty = 0,
  X = 'X',
  O = 'O',
}
const GRID_SIZE = 3;
type GridType = ReadonlyArray<ReadonlyArray<CellValues>>;
type HandlePlayType = (coordinates: { row: number; cell: number }) => void;

export const useTicTacToe = (): [GridType, HandlePlayType] => {
  const [grid, setGrid] = useState<GridType>(
    new Array(GRID_SIZE).fill(new Array(GRID_SIZE).fill(CellValues.Empty)),
  );
  const [currentPlay, setCurrentPlay] = useState<CellValues>(CellValues.X);

  const handlePlay = useCallback<HandlePlayType>(
    coordinates => {
      setGrid(
        grid.map((row, rowIndex) => {
          if (rowIndex === coordinates.row) {
            return row.map((cell, cellIndex) => {
              if (cellIndex === coordinates.cell && cell === CellValues.Empty) {
                setCurrentPlay(
                  currentPlay === CellValues.O ? CellValues.X : CellValues.O,
                );
                return currentPlay;
              }
              return cell;
            });
          }
          return row;
        }),
      );
    },
    [grid, currentPlay],
  );
  return [grid, handlePlay];
  
};
