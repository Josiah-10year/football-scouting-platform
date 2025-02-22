import React, { useState } from 'react';
import axios from 'axios';

const MessagePlayer = ({ playerId }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/messages', {
        sender: 'scout-id', // Replace with actual scout ID
        receiver: playerId,
        content: message
      });
      alert('Message sent!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Message Player</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessagePlayer;