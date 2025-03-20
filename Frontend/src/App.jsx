import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPost from './components/ListPost'
import DetailPage from './pages/DetailPage'
// import CreatePost from './pages/CreatePost'
import HandlePost from './pages/HandlePost'


const router = createBrowserRouter([
  {path:'/', element: <Homepage/>},
  {path:'/posts', element: <ListPost />},
  {path:'/post/:id', element: <DetailPage />},
  {path:'/post/:id/edit', element: <HandlePost type='edit'/>},
  {path:'/post/create', element: <HandlePost type='create'/>},
  
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
