export default function Cart({ addedProducts }) {
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
            </li>
          ))}
      </ul>
    </>
  );
}
