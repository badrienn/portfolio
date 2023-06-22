import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './global.css';
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import CVpage from './pages/CVpage'
import SchoolProjectsPage from './pages/SchoolProjectsPage'
import PersonalProjectsPage from './pages/PersonalProjectsPage'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/pages",
      element: <Layout />,
      children: [
        {
          path: "/pages/cv",
          element: <CVpage />
        },
        {
          path: "/pages/school-projects",
          element: <SchoolProjectsPage />
        },
        {
          path: "/pages/personal-projects",
          element: <PersonalProjectsPage />
        }
      ]
    ,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
