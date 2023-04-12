import BaseLayout from './components/BaseLayout';
import './reset.css'
import 'animate.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutMe from './components/about/AboutMe';
import Project from './components/project/Project';
import Notfound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element : <BaseLayout/>,
    errorElement : <Notfound />,
    children : [
      {index: true, element: <Home/>},
      {path:'/about', element: <AboutMe/>},
      {path:'/project', element: <Project/>},
    ]
  },
], 
{
  basename : process.env.PUBLIC_URL,
});

function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
