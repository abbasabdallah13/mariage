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






 




 









 
  
  return (
    <div>
      <h1>Guests</h1>
     
      
    </div>
  );
};

export default Home;
