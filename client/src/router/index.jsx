// Router
import { createBrowserRouter } from 'react-router-dom';
// Layout
import MainLayout from '../layouts/MainLayout';
// Pages
import BookAdd from '../pages/book/BookAdd';
import BookList from '../pages/book/BookList';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'book-list',
            element: <BookList />,
          },
          {
            path: 'book-add',
            element: <BookAdd />,
          },
          // Fallback to 404
          // {
          //   path: "*",
          //   element: <NotFoundPage />,
          // },
        ],
      },
    ],
  },
]);
