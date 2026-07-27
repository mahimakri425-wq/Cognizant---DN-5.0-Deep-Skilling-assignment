export const IndianTeam = [
  'Sachin1',
  'Dhoni2',
  'Virat3',
  'Rohit4',
  'Yuvraj5',
  'Raina6'
];

export function OddPlayers([
  first,
  ,
  third,
  ,
  fifth
]) {
  return (
    <ul>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </ul>
  );
}

export function EvenPlayers([
  ,
  second,
  ,
  fourth,
  ,
  sixth
]) {
  return (
    <ul>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </ul>
  );
}

const T20Players = [
  'First Player',
  'Second Player',
  'Third Player'
];

const RanjiTrophyPlayers = [
  'Fourth Player',
  'Fifth Player',
  'Sixth Player'
];

export const IndianPlayers = [
  ...T20Players,
  ...RanjiTrophyPlayers
];

export function ListofIndianPlayers({ players }) {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
}