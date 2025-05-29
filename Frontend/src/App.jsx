import './App.css'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer.jsx'
import {createBrowserRouter,RouterProvider, useLocation} from 'react-router-dom'
import ListPost from './components/ListPost.jsx'
import DetailPage from './pages/DetailPage.jsx'
// import CreatePost from './pages/CreatePost'
import AdminHandlePost from './pages/AdminHandlePost.jsx'
import AdminLoginPage from './pages/AdminLoginPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminPostList from './pages/AdminPostList.jsx'
import useAuth from './hooks/useAuth.jsx'


const router = createBrowserRouter([
  {path:'/', element: <Homepage/>},
  {path:'/posts', element: <ListPost />},
  {path:'/admin/posts', element: <AdminPostList />},
  {path:'/posts/:id', element: <DetailPage />},
  {path: '/admin', element: <AdminDashboard />},
  {path: '/admin/create/post', element: <AdminHandlePost />},
  {path: '/admin/dashboard', element: <AdminDashboard />},
  {path:'/admin/posts/:id/edit', element: <AdminHandlePost/>},
  {path:'/admin/login', element: <AdminLoginPage />},
],
  { basename: '/' });

  

  function App() {

    const {auth} = useAuth()

    const isAdminRoute = location.pathname.startsWith('/admin');

    if (isAdminRoute && !auth && location.pathname !== '/admin/login') {
      window.location.replace('/admin/login');
      return null;
    }
    return (
      <div className='App'>
          {!isAdminRoute && <Header></Header>}
             <RouterProvider router={router}/>
          {!isAdminRoute && <Footer></Footer>}
      </div>  
  )
}
export default App
