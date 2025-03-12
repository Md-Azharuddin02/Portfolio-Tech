import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components
const Layout = React.lazy(() => import('./Components/Layout/Layout'));
const Home = React.lazy(() => import('./Pages/Home'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
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