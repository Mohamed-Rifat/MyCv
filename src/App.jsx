import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { Offline } from 'react-detect-offline';
import { MdOutlineWifiOff } from 'react-icons/md'
import NotFoundPage from './Pages/NotFound/NotFound'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import Certificates from './Pages/Certificate/Certificate'


function App() {
  
const myRouter=createBrowserRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"Contact",element:<Contact/>},
    {path:"Projects",element:<Projects/>},
    {path:"Certifications",element:<Certificates/>},
    {path:"*",element:<NotFoundPage/>}
  ]}
])
  return (
    <>
      <Offline>
            <div className='offline flex items-center p-3 bg-red-500 text-white text-center'>
              Oops... You are offline. Check your connection <MdOutlineWifiOff className='ms-2' />
            </div>
          </Offline>
     <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
