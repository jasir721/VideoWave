import React from 'react';
import {Header} from './container';
import {Navbar} from './components';
import './App.scss'
const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Header/>
        {/* <About/>
        <Footer/> */}
    </div>
  );
}

export default App;