import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary'
import Loader from './Components/Home/Loader';

// Lazy load components
const Layout = React.lazy(() => import('./Components/Layout/Layout'));
const Home = React.lazy(() => import('./Pages/Home'));


function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App; 