import './App.css';

import {
  ListofPlayers,
  Scorebelow70,
  players
} from './ListofPlayers';

import {
  IndianTeam,
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers
} from './IndianPlayers';

function App() {
  const flag = false;

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  }

  return (
    <div>
      <h1>Indian Team</h1>

      <h1>Odd Players</h1>
      {OddPlayers(IndianTeam)}

      <hr />

      <h1>Even Players</h1>
      {EvenPlayers(IndianTeam)}

      <hr />

      <h1>List of Indian Players Merged:</h1>
      <ListofIndianPlayers players={IndianPlayers} />
    </div>
  );
}

export default App;