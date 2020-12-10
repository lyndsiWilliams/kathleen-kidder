// Package imports
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('');

  return (
    <div className="home">
      <h1>Kathleen Kidder</h1>
      <h2>Writer, artist, cat and lizard fanatic</h2>
      {/* If the state isn't working, give a readable line */}
      <p>{state !== 'Well, hello there! (sever) ♥' ? 'Well, hello there! (client) ♥' : state}</p>
    </div>
  );
};

export default Home;