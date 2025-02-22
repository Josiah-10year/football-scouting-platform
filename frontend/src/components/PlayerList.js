import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(response => setPlayers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Football Players</h1>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            <a href={`/players/${player._id}`}>{player.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;