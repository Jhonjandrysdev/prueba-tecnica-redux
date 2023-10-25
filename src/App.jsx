import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostList from "./pages/PostsLists"
import Login from './pages/Login';

function App() {
  return (
    <>
      {
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/posts" element={<PostList/>}/>
        </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App
