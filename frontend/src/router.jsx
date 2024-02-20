import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Quizz from './pages/Quizz/index.jsx';
import CreateCard from './pages/CreateCard/index.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        
    },
    {
        path: '/quizz',
        element: <Quizz />,
    },
    {
        path: '/create-card',
        element: <CreateCard />,
    },
    {
        path: '/:catchAll',
        element: <h1>Not Found</h1>,
    },
]);

export default router;