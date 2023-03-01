
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp';
import {Container} from 'react-bootstrap'
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import CartProvider from './CartContext';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const App=()=> {
  return (
    <>
      <CartProvider>
      <Container>
      <NavbarComp/>
      <BrowserRouter>
        <Routes>
           <Route index element={<Store/>}/>
           <Route path="success" element={<Success/>}/>
           <Route path="cancel" element={<Cancel/>}/>
        </Routes>
      </BrowserRouter>
      </Container>
      </CartProvider>
    </>
  );
}

export default App;
