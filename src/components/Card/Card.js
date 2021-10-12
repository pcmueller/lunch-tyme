import React from 'react';

const Card = ({ id, restaurant, setSelected, setIsPaneOpen }) => {

  const handleClick = () => {
    setSelected(restaurant);
    setIsPaneOpen(true);
    console.log(restaurant);
  }

  return (
    <button 
      className='card' 
      id={id}
      style={{ 
        backgroundImage: `url(${restaurant.backgroundImageURL})` 
      }}
      onClick={handleClick}
    >
      <h2 className='name'>{restaurant.name}</h2>
      <h3 className='category'>{restaurant.category}</h3>
    </button>
  );
}

export default Card;