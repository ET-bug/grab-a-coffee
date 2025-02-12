import HomePage from './pages/HomePage.jsx';
import NeighbourhoodPage from './pages/NeighbourhoodPage.jsx';
import './index.css';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'neighbourhood/:name',
    element: <NeighbourhoodPage />,
  },
];

export default routes;