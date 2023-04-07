import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/Navigation';
import MainPage from './Component/HomePage/MainPage';
import DisplayContent from './Component/DisplayContent/DisplayContent';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import CheckOut from './Component/CheckOut/CheckOut';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import CartContextProvider from './Component/CartContext';
function App() {
  return (
  <Router>
    <div className="App">

      <CartContextProvider>
      <NavBar/>
      <Routes>
      <Route path="" element={<MainPage/>}/>
      <Route path="/display" element={<DisplayContent/>}/>
      <Route path="/order/:id" element={<PlaceOrder/>}/>
      <Route path="/checkout" element={<CheckOut/>}/>
</Routes>
</CartContextProvider>
    </div>
    </Router>
  );
}

export default App;
