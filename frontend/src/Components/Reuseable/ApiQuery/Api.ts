import axios from 'axios';
import { apiQuery } from '../../../types/Components';

// Replace with your Google Books API key
const GOOGLE_BOOKS_API_KEY = import.meta.env.VITE_BOOK_API;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchBooks = async ({query,maxnumber,orderBy}:apiQuery) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        key: GOOGLE_BOOKS_API_KEY,
        orderBy: {orderBy}, 
        maxResults: {maxnumber}, 
      },
    });
    console.log(response.data.items)
    return response.data.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
