import Generic from './comoponents/body/Generic';
import ProductList from './comoponents/body/productList';
import Footer from './comoponents/layout/Footer';
import Header from './comoponents/layout/Header';
import { CartProvider } from './comoponents/body/CartContext';
function App() {
  

  return (
    <CartProvider>
 
      <Header />
      <br />
      
      <Generic />
      <ProductList />
      <Footer />
    
    </CartProvider>
  );
}

export default App;
