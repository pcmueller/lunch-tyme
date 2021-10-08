import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

const List = ({ restaurants, error }) => {

  const [ cards, setCards] = useState([]);

  useEffect(() => {
    const populateList = () => {
      const newCards = restaurants.map(restaurant => {
        return (
          <Card
            key={restaurant?.contact?.phone}
            id={restaurant?.contact?.phone}
            name={restaurant?.name}
            category={restaurant?.category}
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