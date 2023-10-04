import { createBrowserRouter } from 'react-router-dom';
import User from './routes/User';
import Alert from './routes/Alert';
import Notice from './routes/Notice';
import Root from './routes/root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/User',
                element: <User />,
            },
            {
                path: '/Alert',
                element: <Alert />,
            },
            {
                path: '/Notice',
                element: <Notice />,
            },
        ],
    },
]);

export default router;
