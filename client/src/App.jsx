import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Formname from './components/form/Formname';
import Text from "./components/text1/Text";
// import Text2 from "./components/text1/Text2"
import Moneybutton from './components/moneybutton/Moneybutton';
import ProductSelection from './components/product/ProductSelection'

function App() {
  return (
    <div className="app">
      <div className="left-panel"></div>
      <div className="center-panel">
        <Text/>
        
        <Moneybutton  />
        {/* <Text2/> */}
        <Formname />

        </div>
      <div className="right-panel"></div>
    </div>
  );
}

export default App;
