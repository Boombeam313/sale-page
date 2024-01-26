// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from './components/form/Form';
import Text from './components/form/text1/Text';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form" element={<Form />} />
        <Route path="Text" element={<Text/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App