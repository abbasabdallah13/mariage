import { useState, useEffect } from 'react';
import { client } from '../client';

const Guests = () => {
  const [guests, setGuests] = useState([]);
  const query = `*[_type == "guests"] {
    userName,
    password,
    firstName,
    childrens,
    partner,
    reception,
    wineReception,
    accommodation1night,
    accommodation2night,
  }`;

  useEffect(() => {
    client
      .fetch(query)
      .then((guests) => setGuests(guests))
      .catch(console.error);
  }, [query]);

  return guests;
};

export default Guests;
