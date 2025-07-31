import ProductList from "./components/productList";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },

    { name: "Pane", price: 1.2 },

    { name: "Latte", price: 1.0 },

    { name: "Pasta", price: 0.7 },
  ];
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}

export default App;
