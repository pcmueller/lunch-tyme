import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
// import Details from '../Details/Details';

const List = ({ restaurants, error }) => {

  const [ cards, setCards] = useState([]);

  useEffect(() => {
    const populateList = () => {
      const newCards = restaurants.map(restaurant => {
        return (
          <Card
            key={restaurants?.indexOf(restaurant)}
            id={restaurants?.indexOf(restaurant)}
            name={restaurant?.name}
            category={restaurant?.category}
            imageURL={restaurant?.backgroundImageURL}
          />
        )
      });

      if (newCards.length === restaurants.length) {
        setCards(newCards);
      }
    }

    if (restaurants.length > 0) {
      populateList();
    }
  }, [restaurants, setCards]);

  return (
    <>
      <Header />
      <section className='list'>
        {cards.length === restaurants.length && !error && cards}
      </section>
    </>
  );
}

export default List;