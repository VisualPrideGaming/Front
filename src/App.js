import Header from './components/header/header';
import Home from './components/home/home';
import Minigames from './components/minigames/minigames';
import Footer from './components/footer/footer';
import Videogame from './components/videogame/videogame';
import Contact from './components/contact/contact';
// import Profile from './components/profile/profile';
// import Login from './components/Login';
// import Register from './components/Register';

import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path='/videogame/:id' element={<Videogame />} />
          <Route path="/minijuegos" element={<Minigames />} />
          <Route path="/nosotros" element={<Contact />} />
          {/* <Route path="/perfil" element={<Profile />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
