import { createContext } from 'react';

// providing default state for the list context
const list = [{ id: 1, selected: false }, { id: 2, selected: false }];

export const ListContext = createContext(list);

export default ListContext;
