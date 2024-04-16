import React, { useState, useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import usePaging from '../hooks/usePaging';
import '../App.css'; // Import CSS file for styling
import { HeaderColumn } from '../components/HeaderColumn';
import { JokesContext } from '../App'; // Import JokesContext from App
import { Paging } from './Paging';

const JokesTable = () => {
  const { jokes, setJokes } = useContext(JokesContext);
  const [sortBy, setSortBy] = useState('id'); // Default sort by id
  const [sortOrder, setSortOrder] = useState('asc');
  const { paginatedData, totalPages, currentPage, changePage } = usePaging(jokes);

  const handleSortChange = (field) => {
    if (field === sortBy) {
      // Toggle sort order if sorting by the same field
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Reset sort order if sorting by a new field
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  jokes.sort((a, b) => {
    const compareValue = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'id' || sortBy === 'rating') return (a[sortBy] - b[sortBy]) * compareValue;
    else return a[sortBy].localeCompare(b[sortBy]) * compareValue;
  });

  const handleRatingChange = (id, rating) => {
    setJokes([...jokes.map((joke) => (joke.id === id ? { ...joke, rating } : joke))]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <HeaderColumn id="id" label="ID" handleSortChange={handleSortChange} sortBy={sortBy} sortOrder={sortOrder} />
            <HeaderColumn id="type" label="Type" handleSortChange={handleSortChange} sortBy={sortBy} sortOrder={sortOrder} />
            <HeaderColumn id="setup" label="Setup" handleSortChange={handleSortChange} sortBy={sortBy} sortOrder={sortOrder} />
            <HeaderColumn id="punchline" label="Punchline" handleSortChange={handleSortChange} sortBy={sortBy} sortOrder={sortOrder} />
            <HeaderColumn id="rating" label="Rating" handleSortChange={handleSortChange} sortBy={sortBy} sortOrder={sortOrder} />
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((joke, index) => (
            <tr key={joke.id}>
              <td>{joke.id}</td>
              <td>{joke.type}</td>
              <td>{joke.setup}</td>
              <td>{joke.punchline}</td>
              <td>
                <Rating
                  initialValue={joke.rating}
                  size={20}
                  transition
                  fillColor="gold"
                  emptyColor="gray"
                  onClick={(rating) => handleRatingChange(joke.id, rating)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paging currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};

export default JokesTable;
