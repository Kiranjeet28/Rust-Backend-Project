import { useContext } from 'react';

import Userdata from "./components/Userdata";
import BasicButton from '../Reuseable/Button/BasicButton';
import { SearchBar } from './components/SearchBar';
import Logo from '../Reuseable/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../Context/UserDataProvider';

export default function Navbar() {
  const navigate = useNavigate();
  const{ userData} = useContext(UserDataContext);
  console.log("context", userData)
  return (
    <div className="bg-pink-50 fixed top-0 w-[100vw] h-[10vh] z-30 pr-3">
      <div className="flex justify-between items-center">
        <Logo />
        <SearchBar />
        { !userData.id && (  // Check for data.id to show button
          <BasicButton onClick={() => { navigate('/login') }}
              disable={false}
              text="Get Books"
              className="" />
        )}
        { userData.id && <Userdata  />}  {/* Render Userdata only when data is available */}
      </div>
    </div>
  );
}
