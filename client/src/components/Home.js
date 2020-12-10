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
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default Home;