import { useState } from "react";
import ProductList from "./components/productList";
import Cart from "./components/Cart";

const products = [
  { name: "Mela", price: 0.5 },

  { name: "Pane", price: 1.2 },

  { name: "Latte", price: 1.0 },

  { name: "Pasta", price: 0.7 },
];

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  function addToCart(product) {
    const found = addedProducts.find((p) => p.name === product.name);
    if (!found) {
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      setAddedProducts(
        addedProducts.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    }
  }

  function removeFromCart(product) {
    if (addedProducts.find((p) => p.name === product.name)) {
      setAddedProducts(addedProducts.filter((p) => !(p.name === product.name)));
    }
  }

  function handleQuantityChange(product, value) {
    const updatedProducts = addedProducts.map((p) =>
      p.name === product.name ? { ...p, quantity: parseInt(value) } : p
    );

    setAddedProducts(updatedProducts);
  }

  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        addedProducts={addedProducts}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
      />
    </>
  );
}

export default App;
