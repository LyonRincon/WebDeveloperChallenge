import React, { useState, useContext } from 'react';
import '../App.css'; // Import CSS file for styling
import { getNewId } from '../utils/general';
import { JokesContext } from '../App';

const AddJokeForm = ({ onAdd }) => {
  const { jokes } = useContext(JokesContext);
  const [type, setType] = useState('');
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!type || !setup || !punchline) {
      alert('Please fill in all fields.');
      return;
    }
    // Create new joke object
    const newJoke = {
      id: getNewId(jokes), // Generate unique ID adding 1 to the current max value
      type,
      setup,
      punchline,
      rating: 0, // Set initial rating to 0
    };

    // Call the onAdd function passed from the parent component
    onAdd(newJoke);
    // Clear form fields
    setType('');
    setSetup('');
    setPunchline('');
    // Show success message
    setShowSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <form className="add-joke-form" onSubmit={handleSubmit}>
      <h2>Add Joke</h2>
      {showSuccess && <div className="success-message">Joke added successfully!</div>}
      <div>
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <div>
        <label htmlFor="setup">Setup:</label>
        <input type="text" id="setup" value={setup} onChange={(e) => setSetup(e.target.value)} />
      </div>
      <div>
        <label htmlFor="punchline">Punchline:</label>
        <input type="text" id="punchline" value={punchline} onChange={(e) => setPunchline(e.target.value)} />
      </div>
      <button type="submit">Add Joke</button>
    </form>
  );
};

export default AddJokeForm;
