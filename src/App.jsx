import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import KedarnathTemplePage from "./Components/Kedarnath/KedarnathTemplePage.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home></Home>


         {/*************************************************************   */}
            {/*Hello! in order to use the kedarnath page un comment below line*/}
            
            
            {/*<KedarnathTemplePage/>*/}
            
            {/**************************************************************/}
      
    </>
  )        
}

export default App
