import { createContext } from 'react';
const list = [{ id: 1, selected: false }, { id: 2, selected: false }];

export const ListContext = createContext(list);

export default ListContext;
