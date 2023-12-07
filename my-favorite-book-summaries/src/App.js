import React from 'react';
//import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import Book from "./components/Books";
import data from "./assets/data";

function App() {
  const books = data.map(item=>{
    return(
      <Book 
        key={item.id}
        {...item} />
    )
  })
  console.log(books)
  return (
   <div className='main--container'>
    <NavBar />
    <div className='the-book-container'>
      {books}
    </div>
   </div>
  );
}

export default App;
