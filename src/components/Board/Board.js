import React from "react";
import Tile from "../Tile";
import "./Board.css";

const Board = ({ numTiles, tiles }) => {
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  };

  const boardTiles = tiles.map((tile) => <Tile {...tile} />);

  return (
    <div className="Board" style={gridConfig}>
      {boardTiles}
    </div>
  );
};

export default Board;
