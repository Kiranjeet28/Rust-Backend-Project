import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import getRefresh from '../Components/Reuseable/Session/refreshToken';
import { useEffect, useState } from 'react';
import Loading from '../Components/Reuseable/Loading';


function Layout() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      try {
        await getRefresh();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
      <div className="m-0 p-0 w-[100vw] h-[100vh] flex flex-col justify-between">
        <Navbar  />
        <div className="mt-[10vh]">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}

export default Layout;
