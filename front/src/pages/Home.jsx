import { useEffect} from "react";
// import { client } from "../client";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [guests, setGuests] = useState([]);
  // useEffect(() => {
  //   client
  //     .fetch(`*[_type == "guests"]`)
  //     .then((guests) => setGuests(guests))
  //     .catch(console.error);
  // }, []);

  const navigate = useNavigate();
  // if no user is logged in redirect to login page
  // this allow me to secure the access to the home page from the url
  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      navigate("/");
    }
  }, [navigate]);

  return <div>home</div>;
};

export default Home;
