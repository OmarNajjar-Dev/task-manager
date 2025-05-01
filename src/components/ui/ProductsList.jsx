import Product from "./Product";

export default function Products({ products }) {
  return (
    <>
      {products?.map((p) => (
        <Product
          key={p.id}
          id={p.id}
          image={p.image}
          title={p.title}
          description={p.description}
          price={p.price}
        />
      ))}
    </>
  );
}
