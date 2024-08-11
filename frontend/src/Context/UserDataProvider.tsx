import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { DataType,UserDataContextValue } from '../types/Components';

const initialState: DataType = {
  first_name: "",
  id: "",
  last_name: "",
  login: "",
  mail: "",
  card_items :[]
};

export const UserDataContext = createContext<UserDataContextValue>({
  userData: initialState,
  isLoading: false,
  error: null,
});

export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<DataType>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = sessionStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }
        const response = await axios.get<DataType>('http://127.0.0.1:8000/api/v1/user', {
          headers: {
            Authorization: `tokenRust ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={{ userData, isLoading, error }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
