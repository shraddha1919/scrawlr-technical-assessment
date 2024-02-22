import React, { useEffect, useState } from 'react';
import Upvote from '../upvote/Upvote';
import plusIcon from '../../assets/plus.svg';
import './UpvoteList.css';

const UpvoteList = ({ item, changeHandler }) => {
  // reading upvote item from localStorage
  const upvoteLSItem = localStorage.getItem(`upvote-item-${item.id}`);

  // parsing localStorage data to get object
  const upvoteLSObj = upvoteLSItem ? JSON.parse(upvoteLSItem) : {};

  // using default selection state from localStorage. If not present, reading selection state from context
  const [selected, setSelected] = useState(upvoteLSObj.selected || item.selected);

  // using upvoteItemArray from localStorage. If not present, initializing with empty array
  const [upvoteItemArray, setUpvoteItemArray] = useState(upvoteLSObj.upvoteItemArray || []);

  useEffect(() => {
    // setting the details of upvote container list in localStorage
    localStorage.setItem(`upvote-item-${item.id}`, JSON.stringify({ upvoteItemArray, selected }))
  }, [item, selected, upvoteItemArray])

  useEffect(() => {
    // propagating the selection state change to the parent component to update the context
    changeHandler({ id: item.id, selected: selected})
  }, [item.id, selected, changeHandler])
  
  const onClickHandler = () => {
    // toggle selection state
    setSelected(!selected);
  };

  const onAddBtnClick = () => {
    // push the newly added upvote item to the container list
    setUpvoteItemArray((oldUpvoteArray) => [
      ...oldUpvoteArray,
      'upVote' + oldUpvoteArray.length
    ]);
  };

  return (
    <div className={'upvote-list-container'}>
      <div key={item.id} className={'upvote-group'}>
        {upvoteItemArray.map((_list, index) => {
          return (
            <Upvote
              id={`upvote-group-${item.id}-button-${index}`}
              selected={selected}
              toggleSelected={onClickHandler}
            />
          );
        })}
      </div>
      <div data-testid={'plus-button'} className={'plus-icon'} onClick={onAddBtnClick}>
        <img src={plusIcon} alt="Add button" />
      </div>
    </div>
  );
};

export default UpvoteList;
