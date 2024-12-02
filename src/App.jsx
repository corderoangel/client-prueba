import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskForm from "./pages/TaskForm"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App(){
  return(
    <BrowserRouter>
    <div className="container mx-auto px-10">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/tasks/:id" element={<TaskForm/>}></Route>
          <Route path="/tasks/new" element={<TaskForm/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App