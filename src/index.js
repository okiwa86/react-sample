import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./views/Layout";
import BlogList from "./views/blog/BlogList";
import Home from "./views/home/Home";
import Join from "./views/auth/Join";
import Login from "./views/auth/Login";
import BlogView from "./views/blog/BlogView";
import BlogForm from "./views/blog/BlogForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'join',
                element: <Join />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'posts',
                element: <BlogList />
            },
            {
                path: 'posts/new',
                element: <BlogForm />
            },
            {
                path: 'posts/:id',
                element: <BlogView />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm install
// axios
// react-router-dom
// styled-component
// @reduxjs/toolkit
// react-redux









