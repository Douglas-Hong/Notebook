import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PaletteIcon from '@material-ui/icons/Palette';
import Tooltip from './Tooltip';
import Colors from './Colors';

export default function Palette(props) {
  const [paletteIsClicked, setPaletteIsClicked] = useState(false);

  function handlePaletteClick() {
    setPaletteIsClicked(!paletteIsClicked);
  }

  function setClosed() {
    setPaletteIsClicked(false);
  }

  return (
    <ClickAwayListener onClickAway={setClosed}>
      <span className="palette-container" onClick={handlePaletteClick}>
        <Tooltip title="Change color" content={<PaletteIcon/>}></Tooltip>
        {paletteIsClicked ? <Colors onColorChange={props.onColorChange} /> : null}
      </span>
    </ClickAwayListener>
  );
}