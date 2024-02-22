import { useContext, useState } from 'react';
import ListContext from './listContext.js';
import UpvoteList from './components/upvote-list/UpvoteList.js';
import './App.css';

function App() {
  const list = useContext(ListContext);
  const [upVoteItemList, setUpVoteItemList] = useState(list);

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

