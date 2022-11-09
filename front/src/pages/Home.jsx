import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { client } from "../client";

const Home = () => {
  // const [guests, setGuests] = useState([]);
  // useEffect(() => {
  //   client
  //     .fetch(`*[_type == "guests"]`)
  //     .then((guests) => setGuests(guests))
  //     .catch(console.error);
  // }, []);

  // to have better readability in useEffect
  const user = localStorage.getItem('userName');
  const navigate = useNavigate();

  useEffect(() => {
    // if no user is logged in redirect to login page
    // this allow me to secure the access to the home page from the url
    !user && navigate('/');
  }, [navigate, user]);

  return <div>Hi I am Home(Main page)</div>;
};

export default Home;
