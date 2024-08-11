import { useParams } from 'react-router-dom';
import { Lamp } from '../Components/FrontPage/Lamp';
import Card from '../Components/FrontPage/Card';
function Search() {
  const { query } = useParams();


  return (
    <div>
      <Lamp text={query} />
      <Card query={query} />
    </div>
  );
}

export default Search;