import React, { Component } from 'react';

const api = 'https://api-football-v1.p.rapidapi.com/v2/';
const apiValue = '64ec5fbc22msh6cdc0762a2c3439p103074jsn89f2b5f63a62';
const headers = { headers: { 'x-rapidapi-key': apiValue } };

class App extends Component {
  state = {
    standings: []
  }

  fetchData = async api => {
    const response = await fetch(api, headers);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body.api;
  };

  storeTeamData(data) {
    const standings = data.standings[0];

    this.setState({ standings });
    localStorage.setItem('standings', JSON.stringify(standings));
  }

  async componentDidMount() {
    await this.fetchData(`${api}leagueTable/524`)
      .then(data => this.storeTeamData(data))
      .catch(error => console.error(error));
  }

  renderTeam({ points, rank, teamName, logo }, key) {
    return (
      <div key={key}>
        <p>Rank: {rank}</p>
        <p>Team: {teamName}</p>
        <p>Points: {points}</p>
        <img src={logo} alt={`${teamName} logo`} />
      </div>
    );
  }

  render() {
    const standings = JSON.parse(localStorage.getItem('standings')) || this.state.standings;

    return (
      <header className="App-header">
        {standings.map((team, key) => this.renderTeam(team, key))}
      </header>
    );
  }
}

export default App;
