// src/App.js
import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import { Header } from './Header';

function App() {
  const [teamMembers, setTeamMembers] = useState ([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const response = await fetch('https://localhost:3000');
      const data = await response.json();
      setTeamMembers(data);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="App">
      <Header title="Meet Our Team" />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;