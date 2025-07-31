export default function ProductList({ products }) {
  return (
    <>
      <ul>
        {products &&
          products.map((product, index) => (
            <li key={index}>
              {" "}
              {product.name}, {product.price.toFixed(2)}
              {"€"}
            </li>
          ))}
      </ul>
    </>
  );
}
