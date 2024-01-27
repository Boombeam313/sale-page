// import "bootstrap/dist/css/bootstrap.css"

import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from './components/form/Form';
import Text from './components/form/text1/Text';
import Text2 from './components/form/home/Text2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form" element={<Form />} />
        <Route path="Text" element={<Text/>} />
        <Route path="Text2" element={<Text2/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App