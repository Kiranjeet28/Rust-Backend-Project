import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookDetails } from '../Components/Reuseable/ApiQuery/bookDetails';
import Loading from '../Components/Reuseable/Loading';
import { Link } from 'react-router-dom'; 

import BasicButton from '../Components/Reuseable/Button/BasicButton';
import logo from "../assets/Logo.png";
import GradualSpacing from '../UI/Components/GradualSpacing';
interface Book {
  // Define the structure of your book object here
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    publisher: string;
    publishedDate: string;
    pageCount: number;
    language: string;
    previewLink: string;
  };
}

const Item: React.FC = () => {
   
    

  const { items: bookId } = useParams() ; 
  const [loading, setIsLoading] = useState(true);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        if (!bookId) return;
        const data = await bookDetails({ bookId });
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getBook();
  }, [bookId]);

  if (loading) {
    return <Loading />;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg flex md:flex-row flex-col shadow-lg overflow-hidden">
        <div className="w-auto h-[80vh] p-5 bg-pink-300">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || logo}
            alt={book.volumeInfo.title}
            className="w-[100vw] h-full "
          />
        </div>


        <div className="p-6">
         
          <div className='flex flex-row justify-between'>
          <GradualSpacing
      className="font-display text-4xl font-bold mb-2 text-pink-950"
      text={book.volumeInfo.title}
    />
         
            {/* <AddCard item={bookId as string}/> */}
          </div>
          <p className="text-gray-700 font-bold text-md mb-2">
            By {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
          </p>
          <p className="text-gray-700 mb-4">{book.volumeInfo.description}</p>

          {/* Other Book Details */}
          <p>
            <strong>Publisher:</strong> {book.volumeInfo.publisher}
          </p>
          <p>
            <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
          </p>
          <p>
            <strong>Page Count:</strong> {book.volumeInfo.pageCount}
          </p>
          <p>
            <strong>Language:</strong> {book.volumeInfo.language}
          </p>


          <a
            href={book.volumeInfo.previewLink}
            target="_blank"
          >
            <BasicButton onClick={()=>{}} text='Preview' disable={false} className='w-auto'/>
          </a>
        </div>
      </div>
      <Link to="/" className="mt-8 inline-block text-pink-700 font-semibold hover:underline">
        &larr; Back to Search
      </Link>
    </div>
  );
};

export default Item;

