import ReactDOM from 'react-dom/client';
import App from './routes/App.tsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './routes/Layout.tsx';
import Login from './routes/Login.tsx';
import Signup from './routes/Signup.tsx';
import UserDataProvider from './Context/UserDataProvider.tsx'; // Assuming this is the actual path
import Search from './routes/Screach.tsx';
import Items from './routes/items.tsx';

const container = document.getElementById('root') as HTMLDivElement;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="search/:query" element={<Search />} />
      <Route path="items/:items" element={<Items/>}/>
    </Route>
  )
);

ReactDOM.createRoot(container).render(
  <UserDataProvider>
    <RouterProvider router={router} />
  </UserDataProvider>
);
