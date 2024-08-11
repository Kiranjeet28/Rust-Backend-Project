import { useState, useEffect } from 'react';
import { fetchBooks } from '../Reuseable/ApiQuery/Api';
import Rcard from '../Reuseable/Card/Rcard';
import Loading from '../Reuseable/Loading';
import { useNavigate } from 'react-router-dom';

function Card({ query }: { query: any }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  useEffect(() => {
    const getBooks = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const data = await fetchBooks({ query: query, maxnumber: 13, orderBy: "relavent" });
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (even on error)
      }
    };

    getBooks();
  }, [query]);

  return (
    <div className="flex flex-wrap justify-center gap-6" >
      {isLoading ? ( 
        <Loading/>
      ) : (
        books.map((book: any) => (
          <div key={book.id} className=" rounded-lg overflow-hidden max-w-xs w-full" onClick={()=>{navigate(`/items/${book.id}`)}}>
            <Rcard
              title={book.volumeInfo.title}
              Author={book.volumeInfo.authors?.join(', ')}
              img={book.volumeInfo.imageLinks?.thumbnail}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
