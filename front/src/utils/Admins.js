import { useState, useEffect } from 'react';
import { client } from '../client';

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const query = `*[_type == "admins"] {
    userName,
    password,
  }`;

  useEffect(() => {
    client
      .fetch(query)
      .then((admins) => setAdmins(admins))
      .catch(console.error);
  }, [query]);

  return admins;
};

export default Admins;
