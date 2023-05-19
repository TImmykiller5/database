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
import Store from './screens/store/Store';
import StoreDetails from './screens/StoreDetails/StoreDetails';

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
          path: "/admin/product/:id/",
          element: <ProductScreen/>
        },
        
        {
          path: "/stores",
          element: <Store/>
        },

        {
          path: "/store/:id/",
          element: <StoreDetails/>
        },

        {
          path: "/transactions",
          element: <TransactionScreen/>
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
