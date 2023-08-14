import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Nav } from './Components/Nav/Nav'
import { Bag } from './Components/Bag/Bag';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <div className='app'>
      <Nav menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} />
      <Routes>
        <Route path='/store/' element={<Home />}/>
      </Routes>
      <Bag />
    </div>
  )
}

export default App
