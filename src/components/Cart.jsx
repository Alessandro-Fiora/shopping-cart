export default function Cart({
  addedProducts,
  removeFromCart,
  handleQuantityChange,
}) {
  return (
    <>
      <h2 className="cart-title">Carrello:</h2>
      <ul className="cart-list">
        {addedProducts &&
          addedProducts.map((product, index) => (
            <li className="cart-list-item" key={index}>
              {product.name}, {product.price.toFixed(2)}€
              <input
                className="cart-qty-input"
                type="number"
                value={product.quantity}
                min={1}
                onChange={(e) => handleQuantityChange(product, e.target.value)}
              />
              pezzi
              <button
                className="remove-cart-btn"
                onClick={() => removeFromCart(product)}
              >
                Rimuovi dal carrello
              </button>
            </li>
          ))}
      </ul>
      <h2 className="cart-total">
        Totale:{" "}
        {addedProducts
          .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
          .toFixed(2)}
        €
      </h2>
    </>
  );
}
