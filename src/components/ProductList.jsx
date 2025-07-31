export default function ProductList({ products, addToCart }) {
  return (
    <ul className="product-list">
      {products &&
        products.map((product, index) => (
          <li className="product-list-item" key={index}>
            {product.name}, {product.price.toFixed(2)}€
            <button className="add-cart-btn" onClick={() => addToCart(product)}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
    </ul>
  );
}
