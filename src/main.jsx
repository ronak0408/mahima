import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import App from './App'
import './index.css'; 
import Dhams from './Pages/DhamMahima';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TermsOfUse from './Components/TermsOfUse';
import PrivacyPolicy from './Components/PrivacyPolicy';
import About from './Pages/About';
import Famous from './Pages/Famous';
import ConnectWithUs from './Components/Contact us/ContactUs';
import Login from './Components/Login/Login';
import Trekking from './Pages/Trekking';
import Books from './Pages/Books';
import Rigveda2 from './Pages/Books_Pages/Rigveda2';
import Samaveda from './Pages/Books_Pages/Samaveda';
import { Outlet } from "react-router-dom";
import Yajurveda from './Pages/Books_Pages/Yajurveda';
import Atharvaveda from './Pages/Books_Pages/Atharvaveda';
import BlogPage from '/src/Components/blogPage/BlogPage.jsx';
import HimachalTreksPage from './Pages/Trekking_States/HimachalTreksPage';
import KedarnathTemplePage from "./Components/Kedarnath/KedarnathTemplePage.jsx";
import Calendar3 from "./Components/Calendar3.jsx"
import VaranasiPage from './Components/Varanasi/Varanasi.jsx';
import BlogPost from "./Components/BlogPost.jsx"
import Trip_Planner from "./Pages/Trip_Planner/Trip_Planner.jsx"
// import TemplesSection from './Components/Varanasi/TemplesSection.jsx';



const router = createBrowserRouter([
 { path: "/",
  // element: <App></App>,
  children: [
    {
       index: true,
       element: <Home></Home>
    },

  {
          path: "home",
          element: <Home></Home>
      }

      ,

      {
          path: "kedarnath",
          element: <KedarnathTemplePage/>
      }
      ,
   
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
      path: "varanasi",
      element: <VaranasiPage></VaranasiPage>
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
  path: "himachal-pradesh",     // ✅ direct route
  element: <HimachalTreksPage></HimachalTreksPage>

},
    {
      path: "books",
      element: <Books></Books>,
      // children: [{
      //   path: "rigveda",
      //   element: <Rigveda></Rigveda>
      // }
      // ]
    },
    {
  path: "rigveda",     // ✅ direct route
  element: <Rigveda2></Rigveda2>
},{
  path: "samaveda",     // ✅ direct route
  element: <Samaveda></Samaveda>
},

{
  path: "yajurveda",     // ✅ direct route
  element: <Yajurveda></Yajurveda>
},

{
  path: "atharvaveda",     // ✅ direct route
  element: <Atharvaveda></Atharvaveda>

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
   ,

    {
      path: "festival-calendar",
      element: <Calendar3></Calendar3>
    }
   {
      path: "Trip_Planner",
      element: <Trip_Planner></Trip_Planner>
    },

   

    {
      path: "BlogPost",
      element: <BlogPost></BlogPost>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
