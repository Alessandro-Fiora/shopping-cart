export default function ProductList({ products, addToCart }) {
  return (
    <>
      <ul>
        {products &&
          products.map((product, index) => (
            <li key={index}>
              {" "}
              {product.name}, {product.price.toFixed(2)}
              {"€"}
              <button onClick={() => addToCart(product)}>
                Aggiungi al carrello
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
