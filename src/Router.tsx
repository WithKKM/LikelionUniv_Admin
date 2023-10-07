import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import UserPage from './routes/UserPage';
import AlertPage from './routes/AlertPage';
import NoticePage from './routes/NoticePage';

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
                path: '/Alert',
                element: <AlertPage />,
            },
            {
                path: '/Notice',
                element: <NoticePage />,
            },
        ],
    },
]);

export default router;
