import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from './screens/Dashboard/Dashboard';
import SideBar from './component/SideBar/SideBar';

function App() {
  const Layout = () => {
    return(
      <div className='layout'>
        <div className='sidebar'><SideBar/></div>
       <div className='outlet'> <Outlet/></div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Dashboard/>
        }
      ]
  }
])
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
