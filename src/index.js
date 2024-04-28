import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Greetings from './routes/introduction/Greetings';
import Root from './routes/root';
import ErrorPage from './error-page';
import Services from "./routes/services"
import Login from "./routes/Login"
import Philosophy from './routes/introduction/Philosophy';

const router = createBrowserRouter([
  {
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "intro/greetings",
        element: <Greetings />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "intro/philosophy",
        element: <Philosophy />,
      },
      // {
      //   path: "frontend",
      //   element: <Frontend />,
      // },
      // {
      //   path: "node",
      //   element: <NodeJs />,
      // },
      // {
      //   path: "php",
      //   element: <Php />,
      // },
      // {
      //   path: "seo",
      //   element: <SEO />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
