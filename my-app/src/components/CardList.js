import React from 'react';
import Card from './Card';

function CardList(props) {
  const { cards, currentPage, cardsPerPage, handlePageChange } = props;
  const pageCount = Math.ceil(cards.length / cardsPerPage);

  // Determine which cards to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Generate a list of `Card` components for the current page
  const cardList = currentCards.map((card, index) => {
    return <Card key={index} title={card.title} description={card.description} />;
  });

  return (
    <div className="card-list">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      </div>
      {cardList}
      <div className="pagination">
        {[...Array(pageCount)].map((_, i) => (
          <button key={i} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CardList;
