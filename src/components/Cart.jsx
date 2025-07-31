export default function Cart({ addedProducts, removeFromCart }) {
  return (
    <>
      <h2>Carrello:</h2>
      <ul>
        {addedProducts &&
          addedProducts.map((product, index) => (
            <li key={index}>
              {" "}
              {product.name}, {product.price.toFixed(2)}
              {"€"}, {product.quantity}
              {"pezzi"}
              <button onClick={() => removeFromCart(product)}>
                Rimuovi dal carrello
              </button>
            </li>
          ))}
      </ul>
      <h2>
        Totale:{" "}
        {addedProducts
          .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
          .toFixed(2)}
      </h2>
    </>
  );
}
