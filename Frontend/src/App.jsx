import './App.css'
import Header from './components/Header.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPost from './components/ListPost.jsx'
import DetailPage from './pages/DetailPage.jsx'
// import CreatePost from './pages/CreatePost'
import HandlePost from './pages/HandlePost.jsx'
import LoginPage from './pages/LoginPage.jsx'


const router = createBrowserRouter([
  {path:'/', element: <Homepage/>},
  {path:'/posts', element: <ListPost />},
  {path:'/posts/:id', element: <DetailPage />},
  {path:'/posts/:id/edit', element: <HandlePost/>},
  {path:'/posts/create', element: <HandlePost />},
  {path:'/login', element: <LoginPage />},
  
])


function App() {

  return (
      <div className='App'>
        <Header></Header>
           <RouterProvider router={router}/>
        <Footer></Footer>
      </div>  
  )
}
export default App
