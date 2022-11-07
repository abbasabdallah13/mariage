import { useEffect, useState } from "react";
import { client } from "../client";




const Home = () => {
  const [guests, setGuests] = useState(null);
  useEffect(() => {
    client
      .fetch(`*[_type == "guests"]`)
      .then((guests) => setGuests(guests))
      .catch(console.error);
  }, []);

  console.log(guests);
 


  return (
    <div>
     home
     
      
    </div>
  );
};

export default Home;
