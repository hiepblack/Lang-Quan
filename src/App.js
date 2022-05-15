import './App.css';
import Menu from './components/Menu/Menu.jsx'
import Oder from './components/Oder/Oder.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalSanPham from './components/Modal/Modal';
function App() {
  return (
    <div className="App">
      <Menu />
      <Oder />
      <ModalSanPham />
    </div>
  );
}

export default App;
