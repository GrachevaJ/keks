import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = (): JSX.Element => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
