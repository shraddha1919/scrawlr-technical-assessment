import React from 'react';
import ArrowUpIcon from '../../assets/ArrowUpIcon';
import './Upvote.css';

const Upvote = ({ id, selected, toggleSelected }) => {
  return (
    <div
      data-testid={id}
      className={`upvote-container ${ selected ? 'upvote-selected' : 'upvote-unselected' }`}
      onClick={toggleSelected}
    >
      <ArrowUpIcon fillColor={selected ? '#253CF2' : '#343A40' } />
    </div>
  );
};

export default Upvote;
