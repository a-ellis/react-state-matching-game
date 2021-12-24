import React from "react";

import "./Tile.css";

const Tile = ({
  id,
  selected,
  matched,
  color,
  svg: SVG,
  handleTileClicked,
}) => {
  const colorStyle = selected || matched ? { backgroundColor: color } : null;
  return (
    <div
      className="Tile"
      style={colorStyle}
      onClick={() => handleTileClicked(id, color)}
    >
      {selected || matched ? <SVG /> : null}
    </div>
  );
};

export default Tile;
