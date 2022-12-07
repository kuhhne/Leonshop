import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>   
        <Route path='/productos/:category' element={<ProductList/>}/>
        <Route path='/producto/:id' element={<Product/>}/>
        <Route path='/registro' element={<Register/>}/>      
        <Route path='/login' element={<Login/>}/>   
      </Routes>
    </Router>
  )
};

export default App;