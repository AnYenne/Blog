import './App.css'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPost from './components/ListPost.jsx'
import DetailPage from './pages/DetailPage.jsx'
// import CreatePost from './pages/CreatePost'
import HandlePost from './pages/HandlePost.jsx'
import AdminLoginPage from './pages/AdminLoginPage.jsx'

const adminRouter = createBrowserRouter([
  {path:'/', element: <Homepage/>},
  {path:'/posts', element: <ListPost />},
  {path:'/posts/:id', element: <DetailPage />},
  {path:'/posts/:id/edit', element: <HandlePost/>},
  {path:'/posts/create', element: <HandlePost />},
  {path:'/login', element: <AdminLoginPage />},
  
])

function AdminApp() {
  return (
      <div className='AdminApp'>
        <Header></Header>
          <RouterProvider router={adminRouter}/>
        <Footer></Footer>
      </div>  
  )
}
export default AdminApp
