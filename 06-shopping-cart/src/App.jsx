import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx";
import { useState } from 'react';
import { Header } from "./components/Header.jsx";
import { IS_DEVELOPMENT } from './config.js';
import { Footer } from "./components/Footer.jsx";
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  const [categoryFilterAll] = useState(() => {
    let categoFilterArray = [];
    initialProducts.map((category) => {
      if (categoFilterArray.indexOf(category.category) == -1) {
        categoFilterArray[categoFilterArray.length] = category.category;
      }
    })
    return categoFilterArray;
  });

  return (
    <CartProvider>
      <Header categorysAll={categoryFilterAll} />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
