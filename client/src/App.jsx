import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Formname from './components/form/Formname';
import Text from "./components/text1/Text";
import Moneybutton from './components/moneybutton/Moneybutton';
import ProductSelection from './components/productcard/ProductSelection'
function App() {
  return (
    <div className="app">
      <div className="left-panel"></div>
      <div className="center-panel">
        <Text/>
        <Moneybutton/>
        <ProductSelection/>
        <Formname />

        </div>
      <div className="right-panel"></div>
    </div>
  );
}

export default App;
