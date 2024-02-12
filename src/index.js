import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './components/App.js';
import NewMenuItem from './components/NewMenuItem.js';
import Menu from './components/Menu.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "newmenuitem",
        element: <NewMenuItem />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
