import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import data from "./assets/data";

function App() {
  const books = Books.map(data=>{})
  return (
   <div className='main--container'>
    <NavBar />
    <div>
      {books}
    </div>
   </div>
  );
}

export default App;
