import React, { Fragment, useEffect, useState } from 'react';
import Header from './02-Molecules/Header/Header';
import Table from './03-Organisms/Table/Table';
import GlobalStyles from '../styles/settings.global.styles';
import { SectionContainer } from '../styles/generic.container.styles';
import { fetchData } from './Utils';
import { ContextProvider } from './Context';

const api = 'https://api-football-v1.p.rapidapi.com/v2/';

function App() {
  const storageStandings = JSON.parse(localStorage.getItem('standings'));
  const [standings, setStandings] = useState(storageStandings || []);

  const storeTeamData = data => {
    const standings = data.standings[0];

    setStandings(standings);
    localStorage.setItem('standings', JSON.stringify(standings));
  };

  useEffect(() => {
    if (localStorage.getItem('standings')) {
      return;
    }

    fetchData(`${api}leagueTable/524`)
      .then(data => storeTeamData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Fragment>
      <ContextProvider>
        <GlobalStyles />
        <Header />
        <SectionContainer>
          <Table standings={standings} />
        </SectionContainer>
      </ContextProvider>
    </Fragment>
  );
}

export default App;

