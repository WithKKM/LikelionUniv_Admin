import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import UserPage from './routes/UserPage';
import NoticePage from './routes/NoticePage';
import RecrutingPage from './routes/RecrutingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/User',
                element: <UserPage />,
            },
            {
                path: '/Recruting',
                element: <RecrutingPage />,
            },
            {
                path: '/Notice',
                element: <NoticePage />,
            },
        ],
    },
]);

export default router;
