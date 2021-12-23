import React from "react";

import "./Tile.css";

const Tile = ({ selected, matched, color, svg: SVG }) => {
  const colorStyle = selected || matched ? { backgroundColor: color } : null;
  return (
    <div className="Tile" style={colorStyle}>
      {selected || matched ? <SVG /> : null}
    </div>
  );
};

export default Tile;
