import React from "react";
import "./productslist.scss";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Chewy Bone",
    description: "A delicious bone for your dog to enjoy.",
    price: 9.99,
    image: "/images/chewy-bone.jpg",
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    description: "Perfect place for your cat to scratch and stretch.",
    price: 24.99,
    image: "/images/cat scratching post.jpg",
  },
  {
    id: 3,
    name: "Parrot Toy",
    description: "A colorful and interactive toy for parrots.",
    price: 14.5,
    image: "/images/parrot toy.jpg",
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price.toFixed(2)}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
