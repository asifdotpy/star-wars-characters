import React from 'react';
import './Card.css'

function Card(props) {
  const { title, description } = props;

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;

