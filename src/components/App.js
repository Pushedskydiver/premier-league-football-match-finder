import React, { Component } from 'react';

const api = 'https://api-football-v1.p.rapidapi.com/v2/';
const apiValue = '64ec5fbc22msh6cdc0762a2c3439p103074jsn89f2b5f63a62';
const headers = { headers: { 'x-rapidapi-key': apiValue } };

class App extends Component {
  fetchData = async api => {
    const response = await fetch(api, headers);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body.api.teams;
  };

  storeTeamData(data) {
    console.log({ data });
  }

  componentDidMount() {
    this.fetchData(`${api}teams/league/524`)
      .then(data => this.storeTeamData(data))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
