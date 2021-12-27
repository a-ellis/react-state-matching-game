import React, { Component } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";
import { createTiles, indexOfSelected } from "../../misc/utils";

import "./App.css";
import GameContext from "../../GameContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
      handleNumTileChange: this.handleNumTileChange,
      startGame: this.startGame,
    };
  }

  startGame = (numTiles) => {
    this.setState(({ numTiles }) => ({
      tiles: createTiles(numTiles, this.handleTileClicked),
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
    }));
  };

  handleTileClicked = (id, color) => {
    this.setState(({ tiles, toBeCleared, previousTileIndex }) => {
      const selectedTileIndex = indexOfSelected(tiles, id, color);

      if (toBeCleared !== null) {
        tiles[toBeCleared[0]].selected = false;
        tiles[toBeCleared[1]].selected = false;
        toBeCleared = null;
      }

      tiles[selectedTileIndex].selected = true;

      if (previousTileIndex !== null) {
        const selectedTile = tiles[selectedTileIndex];
        const previousTile = tiles[previousTileIndex];

        if (
          previousTile.id !== selectedTile.id &&
          previousTile.color === color
        ) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      } else {
        previousTileIndex = selectedTileIndex;
      }

      return {
        tiles,
        toBeCleared,
        previousTileIndex,
      };
    });
  };

  handleNumTileChange = (numTiles) => {
    this.setState({
      numTiles,
      playing: false,
      tiles: [],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <GameContext.Provider value={this.state}>
          <OptionsPanel />
          <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
        </GameContext.Provider>
      </div>
    );
  }
}

export default App;
