import Header from './components/header/header';
import Home from './components/home/home';
import Minigames from './components/minigames/minigames';
import Footer from './components/footer/footer';
import Videogame from './components/videogame/videogame';
import Contact from './components/contact/contact';
import ProfileManagement from './components/profile/profileManagement';
import Profile from './components/profile/profile';
import Presentation from './components/presentation/presentation';
import "bootstrap/dist/css/bootstrap.css"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/inicio" element={<Home />} />
          <Route path='/videogame/:id' element={<Videogame />} />
          <Route path="/minijuegos" element={<Minigames />} />
          <Route path="/nosotros" element={<Contact />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/gestion" element={<ProfileManagement />}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
