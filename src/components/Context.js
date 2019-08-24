import React from 'react';

const Context = React.createContext({});

const data = {
  title: 'Premier League Match Finder'
};

export const ContextProvider = props => (
  <Context.Provider value={data}>
    {props.children}
  </Context.Provider>
);

export default Context;
