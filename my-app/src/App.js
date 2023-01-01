import React, { useState } from 'react';
import CardList from './components/CardList';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const cardsPerPage = 10;

  // Replace this with an API call or some other way to fetch the list of cards
  const cards = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    // ...
  ];

  // Filter the list of cards based on the search term
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle pagination button clicks
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <div style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            padding: '8px',
            width: '300px'
        }}
        onChange={handleSearchChange}
      />
      </div>
      <CardList cards={filteredCards} currentPage={currentPage} cardsPerPage={cardsPerPage} handlePageChange={handlePageChange}/>
      {/* Add pagination buttons here, and pass the `handlePageChange` function as a prop */}
    </div>
  );
}

export default App;

