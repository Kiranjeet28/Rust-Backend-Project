
// import { useState } from 'react';
import '../App.css'
import Banner from '../Components/Banner/Banner'
import { Lamp } from '../Components/FrontPage/Lamp'
import Card from '../Components/FrontPage/Card';

function App() {
  const base_url = import.meta.env.VITE_BASE_URL;
  const api = import.meta.env.VITE_BOOK_API;

  return (
    <div className=''>
    <Banner/> 
    <Lamp text='TOP BOOKS'/>
   
      <Card query='top list'/>
     </div>
  )
}

export default App
