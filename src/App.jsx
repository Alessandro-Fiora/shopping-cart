import { useReducer } from "react";
import ProductList from "./components/productList";
import Cart from "./components/Cart";
import "./assets/css/index.css";

const products = [
  { name: "Mela", price: 0.5 },

  { name: "Pane", price: 1.2 },

  { name: "Latte", price: 1.0 },

  { name: "Pasta", price: 0.7 },
];

function cartReducer(currentCart, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const found = currentCart.find((p) => p.name === action.payload.name);
      if (!found) {
        return [...currentCart, { ...action.payload, quantity: 1 }];
      } else {
        return currentCart.map((p) =>
          p.name === action.payload.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

    case "REMOVE_ITEM":
      return currentCart.filter((p) => !(p.name === action.payload.name));

    case "UPDATE_QUANTITY":
      return currentCart.map((p) =>
        p.name === action.payload.name
          ? {
              ...p,
              quantity:
                isNaN(parseInt(action.payload.quantity)) ||
                parseInt(action.payload.quantity) < 1
                  ? 1
                  : parseInt(action.payload.quantity),
            }
          : p
      );
  }
}

function App() {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  function addToCart(product) {
    dispatchCart({ type: "ADD_ITEM", payload: product });
  }

  function removeFromCart(product) {
    dispatchCart({ type: "REMOVE_ITEM", payload: product });
  }

  function handleQuantityChange(product, value) {
    dispatchCart({
      type: "UPDATE_QUANTITY",
      payload: { name: product.name, quantity: value },
    });
  }

  return (
    <div className="app-background">
      <div className="app-card">
        <h1 className="app-title">🛒 Shopping Cart</h1>
        <ProductList products={products} addToCart={addToCart} />
        <hr className="app-divider" />
        <Cart
          addedProducts={cart}
          removeFromCart={removeFromCart}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
      <footer className="app-footer">Made with ❤️ for your shopping</footer>
    </div>
  );
}

export default App;
