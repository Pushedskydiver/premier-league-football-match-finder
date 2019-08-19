import React, { Fragment, useEffect, useState } from 'react';
import GlobalStyles from '../styles/settings.global.styles';
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
      {standings.map((team, key) => renderTeam(team, key))}
    </Fragment>
  );
}

export default App;
