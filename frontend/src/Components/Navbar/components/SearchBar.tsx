import { useState } from 'react';
import { PlaceholdersAndVanishInput }from '../../../UI/Components/placeholders-and-vanish-input'
import { useNavigate } from 'react-router-dom';
export function SearchBar() {
    const placeholders = [
      "Search your Dreams ",
      "Get Best Books ",
      "Your Dreams are Waiting!!",
      "Read it & Explore World ",
    ];
    const navigate = useNavigate();
    const [query,setQuery]= useState("")
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
      console.log(e.target.value);
    };
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      navigate(`/search/${query}`)
    };
    return (
      <div className=" flex flex-col justify-center  items-center pt-1">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }