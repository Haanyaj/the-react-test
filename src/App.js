import React from 'react';
import NavBar from './components/Navbar';
import './App.css';
import Header from './Header';
import Instructions from './Instructions';


const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar/>
      <Instructions/>
    </div>
  );
}

export default App;
