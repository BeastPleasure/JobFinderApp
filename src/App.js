import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Jobs from './components/job/Jobs';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Value from './components/value/Value';

function App() {

  return (

    <div className="app w-[85%] m-auto bg-white">

      <Navbar />

      <Search />

      <Jobs />

      <Value />

      <Footer />
      
    </div>

  );

};

export default App;
