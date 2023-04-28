import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
// import characters, { Rick } from './data.js';
import axios from "axios";
import { useState,useEffect } from "react";
import { Routes,Route,useLocation,useNavigate } from "react-router-dom";
import Detail from "./components/detail/Detail.jsx";
import About from "./components/about/About.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access,setAccess] = useState(false)
  let EMAIL='percy00261@gmail.com'
  let PASSWORD='12345a'
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters((oldCharacters) =>
      oldCharacters.filter((char) => char.id !== Number(id))
    );
  };

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }
  return (
   <>
    {
      location.pathname !== '/' && <Nav onSearch={onSearch} />
    }
      
   <Routes>

      <Route path="/" element={<Form login = {login} />}></Route>
      <Route path="/Home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      
   </Routes>
   </>
  );
}

export default App;
