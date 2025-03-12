import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';
import { ThemeContext } from '../../Store/ThemeContext ';

function Layout() {
  const { isDark, theme } = useContext(ThemeContext);

  return (
    <main className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} ${theme.themeColor}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default Layout; 