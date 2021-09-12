import React from 'react';
import Tooltip from './Tooltip';

export default function Pin(props) {
  return (
    <Tooltip
      title={props.isPinned ? 'Unpin note' : 'Pin note'}
      content={
        <i
          className='fas fa-thumbtack pin-icon'
          style={{ color: props.isPinned ? '#000' : '#808080' }}
          onClick={props.onClick}
        />
      }
      customStyle={
        props.isPinned
        ? {
            top: '35px',
            left: '-28px',
          }
        : {
            top: '35px',
            left: '-18px',
          }
      }
    />
  );
}