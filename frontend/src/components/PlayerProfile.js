import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlayerProfile = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/players/${id}`)
      .then(response => setPlayer(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
      <p>Height: {player.height} cm</p>
      <p>Weight: {player.weight} kg</p>
      <p>Achievements: {player.achievements}</p>
      <h2>Photos</h2>
      <div>
        {player.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Player ${index}`} style={{ width: '200px', margin: '10px' }} />
        ))}
      </div>
      <h2>Videos</h2>
      <div>
        {player.videos.map((video, index) => (
          <video key={index} controls style={{ width: '300px', margin: '10px' }}>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfile;