import { useEffect, useState } from "react";
import { client } from "../client";




const Home = () => {
  const [data, setData] = useState(null);
  const [guest, setGuest] = useState(null);
  useEffect(() => {
    client
      .fetch(`*[_type == "guest"]`)
      .then((guest) => setGuest(guest))
      .catch(console.error);
  }, []);

  console.log(guest);
  console.log(data);
  console.log(setData);

  return (
    <div>
     home
     
      
    </div>
  );
};

export default Home;
