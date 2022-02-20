import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllTasks from './pages/AllTasks';
import CreateTask from './pages/CreateTask';
import UpdateTask from './pages/UpdateTask';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/task" element={<CreateTask />} />
        <Route path="/task/:taskId/edit" element={<UpdateTask />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
   
        

