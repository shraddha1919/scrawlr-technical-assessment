import { useContext, useState } from 'react';
import ListContext from './listContext.js';
import UpvoteList from './components/upvote-list/UpvoteList.js';
import './App.css';

const App = () => {
  const list = useContext(ListContext);
  // state to maintain the number of upvote container list along with selection state
  const [upVoteItemList, setUpVoteItemList] = useState(list);

  // handler method to update context list with the latest selection state
  const changeHandler = (item) => {
    const newList = upVoteItemList;
    newList[item.id - 1] = item;
    setUpVoteItemList(newList);
  }
  return (
    <ListContext.Provider value={{ upVoteItemList }}>
      <div data-testid={'app-container'}>
      {
        upVoteItemList.map(item => {
          return <UpvoteList key={item.id} id={item.id} item={item} changeHandler={changeHandler}/>
        })
      }
      </div>
    </ListContext.Provider>
  );
}

export default App;

