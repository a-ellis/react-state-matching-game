import React from "react";

import "./Tile.css";

const Tile = ({ selected, matched, color, svg }) => {
  const colorStyle = selected || matched ? { backgroundColor: color } : null;
  return (
    <div className="Tile" style={colorStyle}>
      {selected || matched ? <svg /> : null}
    </div>
  );
};

export default Tile;
