
// import { useState } from 'react';
import '../App.css'
import Banner from '../Components/Banner/Banner'
import { Lamp } from '../Components/FrontPage/Lamp'
import Card from '../Components/FrontPage/Card';

function App() {


  return (
    <div className=''>
    <Banner/> 
    <Lamp text='TOP BOOKS'/>
   
      <Card query='top list'/>
     </div>
  )
}

export default App
