// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from './components/form/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form" element={<Form />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
