import React from "react";

async function Products(props) {
  const products = await getData();
  const ourProds = products.products;

  return (
    <div>
      <h1>Products Page</h1>
      <p>Lets shop Products with us</p>
      <ul>
        {ourProds.map((product, key) => {
          return <li key={key}>{product}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;

export async function getData() {
  let products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return products.json();
}
