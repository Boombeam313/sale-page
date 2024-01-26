import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Formname from './components/form/Formname';

function App() {
  return (
    <div className="app">
      <div className="left-panel"></div>
      <div className="center-panel"><Formname /></div>
      <div className="right-panel"></div>
    </div>
  );
}

export default App;
