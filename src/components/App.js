import React from 'react';
import Header from './02-Molecules/Header/Header';
import Table from './03-Organisms/Table/Table';
import GlobalStyles from '../styles/settings.global.styles';
import { SectionContainer } from '../styles/generic.container.styles';
import { ContextProvider } from './Context';

function App() {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Header />
      <SectionContainer>
        <Table />
      </SectionContainer>
    </ContextProvider>
  );
}

export default App;

