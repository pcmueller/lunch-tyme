import React from 'react';

const Card = ({ id, name, category, imageURL}) => {

  return (
    <article 
      className='card' 
      id={id}
      style={{ 
        backgroundImage: `url(${imageURL})` 
      }}
    >
      <h2 className='name'>{name}</h2>
      <h3 className='category'>{category}</h3>
    </article>
  );
}

export default Card;