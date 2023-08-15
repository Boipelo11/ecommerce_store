import './App.css';
import { useState } from 'react';
import { Home } from './Pages/Home/Home'
import { Nav } from './Components/Nav/Nav'
import { Bag } from './Components/Bag/Bag';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);
  

  return (
    <div className='app'>
      <Nav menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} />
      
        <Home />
      
      <Bag />
    </div>
  )
}



export default App;
