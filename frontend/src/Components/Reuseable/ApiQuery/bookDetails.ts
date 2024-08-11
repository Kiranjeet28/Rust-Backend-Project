import axios from 'axios';

const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_BOOK_API;
const GOOGLE_BOOKS_BASE_URL = 'https://www.googleapis.com/books/v1/volumes'; // Correct Google Books API base URL

export const bookDetails = async ({ bookId }: { bookId: string }) => {
  try {
    const response = await axios.get(`${GOOGLE_BOOKS_BASE_URL}/${bookId}`, {
      params: {
        key: GOOGLE_BOOKS_API_KEY,
      },
    });

    console.log(response.data);
    return response.data; 

  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};
