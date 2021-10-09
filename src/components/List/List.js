import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

const List = ({ restaurants, error, setSelected, setIsPaneOpen }) => {

  const [ cards, setCards] = useState([]);

  useEffect(() => {
    const populateList = () => {
      const newCards = restaurants.map(restaurant => {
        return (
          <Card
            key={restaurants?.indexOf(restaurant)}
            id={restaurants?.indexOf(restaurant)}
            restaurant={restaurant}
            setSelected={setSelected}
            setIsPaneOpen={setIsPaneOpen}
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
  }, [restaurants, setCards, setSelected, setIsPaneOpen]);

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