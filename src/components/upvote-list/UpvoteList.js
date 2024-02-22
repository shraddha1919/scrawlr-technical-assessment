import React, { useEffect, useState } from 'react';
import Upvote from '../upvote/Upvote';
import plusIcon from '../../assets/plus.svg';
import './UpvoteList.css';

const UpvoteList = ({ item, changeHandler }) => {
  const upvoteLSItem = localStorage.getItem(`upvote-item-${item.id}`);
  const upvoteLSObj = upvoteLSItem ? JSON.parse(upvoteLSItem) : {};
  const [selected, setSelected] = useState(upvoteLSObj.selected || item.selected);
  const [upvoteItemArray, setUpvoteItemArray] = useState(upvoteLSObj.upvoteItemArray || []);

  useEffect(() => {
    localStorage.setItem(`upvote-item-${item.id}`, JSON.stringify({ upvoteItemArray, selected }))
  }, [item, selected, upvoteItemArray])

  useEffect(() => {
    changeHandler({ id: item.id, selected: selected})
  }, [item.id, selected, changeHandler])
  
  const onClickHandler = () => {
    setSelected(!selected);
  };

  const onAddBtnClick = () => {
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
