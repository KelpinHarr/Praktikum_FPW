import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Stories from './component/Stories';
import DataHandler from './component/DataHandler';
import Overview from './component/Overview';
import store from "./app/store";
import Profile from './component/Profile';
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/stories",
        element: <Stories/>
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/stories/:story_id/overview",
        element: <Overview />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
