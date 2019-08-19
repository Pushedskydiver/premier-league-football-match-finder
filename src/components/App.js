import React, { Fragment, useEffect, useState } from 'react';
import Header from './02-Molecules/Header/Header';
import GlobalStyles from '../styles/settings.global.styles';
import { SectionContainer } from '../styles/generic.container.styles';
import { fetchData } from './Utils';

const api = 'https://api-football-v1.p.rapidapi.com/v2/';

function App() {
  const storageStandings = JSON.parse(localStorage.getItem('standings'));
  const [standings, setStandings] = useState(storageStandings || []);

  const storeTeamData = data => {
    const standings = data.standings[0];

    setStandings(standings);
    localStorage.setItem('standings', JSON.stringify(standings));
  };

  const renderTeam = ({ points, rank, teamName, logo }, key) => (
    <div key={key}>
      <p>Rank: {rank}</p>
      <p>Team: {teamName}</p>
      <p>Points: {points}</p>
      <img src={logo} alt={`${teamName} logo`} />
    </div>
  );

  useEffect(() => {
    fetchData(`${api}leagueTable/524`)
      .then(data => storeTeamData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <SectionContainer>
        {standings.map(renderTeam)}
      </SectionContainer>
    </Fragment>
  );
}

export default App;
