import React, { useState } from 'react';
import axios from 'axios';

const CreatePlayer = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    position: '',
    height: '',
    weight: '',
    achievements: '',
    photos: [],
    videos: [],
    documents: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (key === 'photos' || key === 'videos' || key === 'documents') {
        for (let i = 0; i < formData[key].length; i++) {
          data.append(key, formData[key][i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/players', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Profile created successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div>
      <h1>Create Player Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
        <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} />
        <textarea name="achievements" placeholder="Achievements" onChange={handleChange}></textarea>
        <input type="file" name="photos" multiple onChange={handleFileChange} />
        <input type="file" name="videos" multiple onChange={handleFileChange} />
        <input type="file" name="documents" multiple onChange={handleFileChange} />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreatePlayer;