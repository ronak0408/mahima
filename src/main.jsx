import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import App from './App'
import './index.css'; 
import Dhams from './Pages/DhamMahima';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
import About from './Pages/About';
import Famous from './Pages/Famous';
import BlogSection from './Components/Blog Section/BlogSection';
import ConnectWithUs from './Components/Contact us/ContactUs';
import Login from './Components/Login/Login';
import Trekking from './Pages/Trekking';
import Books from './Pages/Books';
import BlogPage from '/src/Components/blogPage/BlogPage.jsx';

const router = createBrowserRouter([
 { path: "/",
  // element: <App></App>,
  children: [
    {
       index: true,
       element: <Home></Home>
    },
    {
      path: "dhams",
      element: <Dhams></Dhams>
    },
     {
      path: "about",
      element: <About></About>
    },
      {
      path: "famous",
      element: <Famous></Famous>
    },
     {
      path: "blogs",
      element: <BlogPage/>
    },
     {
      path: "trekking",
      element: <Trekking></Trekking>
    },
    {
      path: "books",
      element: <Books></Books>
    },

     {
      path: "contact",
      element: <ConnectWithUs></ConnectWithUs>
    },
     {
      path: "login",
      element: <Login></Login>
    },
    {
      path: "termsOfUse",
      element: <TermsOfUse></TermsOfUse>
    },
    {
      path: "privacyPolicy",
      element: <PrivacyPolicy></PrivacyPolicy>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
