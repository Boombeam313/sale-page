// ProductSelection.js
import React, { useState } from 'react';
import './Project.css';

const ProductCard = ({ id, name, imageSrc, price, onSelect, isSelected }) => {
  const handleSelect = () => {
    onSelect({ id, name, isSelected: !isSelected });
  };

  return (
    <div className={`product-card ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
      <img className="product-image" src={imageSrc} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

const ProductSelection = () => {
  const products = [
    { id: 1, name: 'Product 1', imageSrc: 'product1.jpg', price: '$10' },
    { id: 2, name: 'Product 2', imageSrc: 'product2.jpg', price: '$20' },
    { id: 3, name: 'Product 3', imageSrc: 'product3.jpg', price: '$30' },
    { id: 4, name: 'Product 4', imageSrc: 'product4.jpg', price: '$40' },
    // Add more products as needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };

  return (
    <div>
      <h1>Product Selection</h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageSrc={product.imageSrc}
            price={product.price}
            onSelect={handleProductSelect}
            isSelected={selectedProduct && selectedProduct.id === product.id}
          />
        ))}
      </div>
      <div>
        <h2>Selected Product</h2>
        {selectedProduct ? (
          <ul>
            <li key={selectedProduct.id}>{selectedProduct.name}</li>
          </ul>
        ) : (
          <p>No product selected</p>
        )}
      </div>
    </div>
  );
};

export default ProductSelection;