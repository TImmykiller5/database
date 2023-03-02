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
import AdminScreen from './screens/AdminScreen/AdminScreen';
import Search from './component/search/Search';
import ProductScreen from './screens/products/ProductScreen/ProductScreen';
import TransactionScreen from './screens/TransactionScreen/TransactionScreen';

function App() {
  const Layout = () => {
    return(
      <div className='layout'>

        <div className='sidebar'><SideBar/></div>
       <div className='outlet'>

        <Search/>
         <Outlet/>
       </div>
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
        },
        {
          path: "/admin/",
          element: <AdminScreen/>
        },
        {
          path: "/product/:id/",
          element: <ProductScreen/>
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
