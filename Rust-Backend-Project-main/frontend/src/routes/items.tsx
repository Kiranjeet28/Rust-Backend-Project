import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookDetails } from '../Components/Reuseable/ApiQuery/bookDetails';
import Loading from '../Components/Reuseable/Loading';
import { Link } from 'react-router-dom'; 

import BasicButton from '../Components/Reuseable/Button/BasicButton';
import logo from "../../public/Logo.png";
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
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-white rounded-lg flex flex-col md:flex-row shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 h-72 md:h-[80vh] p-4 flex items-center justify-center bg-pink-300">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || logo}
            alt={book.volumeInfo.title}
            className="object-contain w-full h-full max-h-72 md:max-h-[70vh] rounded"
          />
        </div>
        <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <GradualSpacing
              className="font-display text-2xl md:text-4xl font-bold mb-2 text-pink-950"
              text={book.volumeInfo.title}
            />
            {/* <AddCard item={bookId as string}/> */}
          </div>
          <p className="text-gray-700 font-bold text-md mb-2">
            By {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
          </p>
          <div
            className="text-gray-700 mb-4 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: book.volumeInfo.description || '' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
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
          </div>
          <div className="mt-2">
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicButton onClick={() => {}} text="Preview" disable={false} className="w-auto" />
            </a>
          </div>
        </div>
      </div>
      <Link to="/" className="mt-8 inline-block text-pink-700 font-semibold hover:underline">
        &larr; Back to Search
      </Link>
    </div>
  );
};

export default Item;

