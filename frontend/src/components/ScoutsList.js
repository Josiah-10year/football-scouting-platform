import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScoutList = () => {
  const [scouts, setScouts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/scouts')
      .then(response => setScouts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Scouts</h1>
      <ul>
        {scouts.map(scout => (
          <li key={scout._id}>
            {scout.name} - {scout.organization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoutList;