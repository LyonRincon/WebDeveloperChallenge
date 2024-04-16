import React, { useState, useEffect, createContext } from 'react';
import { fetchJokes } from './api/jokes';
import './App.css'; // Import CSS file for styling
import JokesTable from './components/JokesTable';
import AddJokeForm from './components/AddJokeForm';

export const JokesContext = createContext();

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes().then((data) => {
      const jokesWithRating = data.map((joke) => ({ ...joke, rating: 0 }));
      setJokes(jokesWithRating);
    });
  }, []); // Run only on the first load

  const handleAddJoke = (newJoke) => {
    setJokes((prevJokes) => [...prevJokes, newJoke]);
  };

  return (
    <JokesContext.Provider value={{ jokes, setJokes }}>
      <div className="page-container">
        <h1>Let's have some fun!</h1>
        <AddJokeForm onAdd={handleAddJoke} />
        <JokesTable />
      </div>
    </JokesContext.Provider>
  );
};

export default App;
