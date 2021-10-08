import React, { useEffect, useState } from 'react';

const Card = ({ id, name, category}) => {
  return (
    <article className='card' id={id} key={id}>
      <h2>{name}</h2>
      <h3>{category}</h3>
    </article>
  );
}

export default Card;