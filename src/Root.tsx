import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
