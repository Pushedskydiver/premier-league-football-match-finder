import React from 'react';

const Context = React.createContext({});

const mansObject = {
  mans: 'new mans'
};

export const ContextProvider = props => (
  <Context.Provider value={mansObject}>
    {props.children}
  </Context.Provider>
);

export default Context;
