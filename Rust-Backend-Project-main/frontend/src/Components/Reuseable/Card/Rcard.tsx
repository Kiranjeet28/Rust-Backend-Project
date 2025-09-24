import { CardType } from '../../../types/Components';
import logo from '../../../../public/Logo.png'

function Rcard({img,title,Author}:CardType){



  return (
    <div className="hover:to-rose-900 hover:from-rose-400 hover:bg-gradient-to-tr m-5 p-4 from-rose-200 to-rose-400 rounded-lg bg-gradient-to-bl text-rose-950 max-w-xs w-full sm:max-w-sm md:max-w-md flex flex-col items-center">
      <img
        src={img ? img : logo}
        alt=""
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded"
      />
      <div className="p-4 w-full">
        <h3 className="text-lg font-semibold w-full h-8 overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </h3>
        <p className="w-full h-7 overflow-hidden text-ellipsis whitespace-nowrap">
          {Author}
        </p>
      </div>
    </div>
  );
};

export default Rcard;