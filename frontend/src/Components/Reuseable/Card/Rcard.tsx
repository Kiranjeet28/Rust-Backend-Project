import { CardType } from '../../../types/Components';
import logo from '../../../../public/Logo.png'

function Rcard({img,title,Author}:CardType){



  return (
    <div className= 'hover:to-rose-900 hover:from-rose-400 hover:bg-gradient-to-tr m-5 p-4 from-rose-200  to-rose-400 rounded-lg bg-gradient-to-bl text-rose-950 '>
     
      <img src={img? img : logo} alt="" className="w-60 h-60" />
            <div className="p-4">
              <h3 className="text-lg font-semibold w-60 h-8 overflow-hidden text-ellipsis">{title}</h3>
              <p className=" w-60 h-7 overflow-hidden ">{Author}</p>
            </div>
    </div>
  );
};

export default Rcard;