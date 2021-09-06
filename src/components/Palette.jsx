import React, { useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PaletteIcon from '@material-ui/icons/Palette';
import Tooltip from './Tooltip';
import Colors from './Colors';

export default function Palette(props) {
  const [paletteIsClicked, setPaletteIsClicked] = useState(false);

  function handlePaletteClick(event) {
    event.stopPropagation();
    setPaletteIsClicked(!paletteIsClicked);
  }

  function handleClickAway() {
    setPaletteIsClicked(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span className="palette-container" onClick={handlePaletteClick}>
        <Tooltip 
          title="Change color" 
          content={<PaletteIcon />}
          customStyle={
            {
              top: '31px',
              left: '-39px'
            }
          }
        />
        {paletteIsClicked ? <Colors onColorChange={props.onColorChange} /> : null}
      </span>
    </ClickAwayListener>
  );
}