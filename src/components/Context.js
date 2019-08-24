import React, { useEffect, useState } from 'react';
import { fetchData } from './Utils';

const Context = React.createContext({});
const api = 'https://api-football-v1.p.rapidapi.com/v2/';

export const ContextProvider = props => {
  const storageStandings = JSON.parse(localStorage.getItem('standings'));
  const [standings, setStandings] = useState(storageStandings || []);

  const data = {
    title: 'Premier League Match Finder',
    standings
  };

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
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
