// ProductSelection.js

import React, { useState } from 'react';
import './Project.css';

// const ProductCard = ({ id, name, imageSrc, price, onSelect, isSelected }) => {
//   const handleSelect = () => {
//     onSelect({ id, name, price, isSelected: !isSelected });
//   };

//   return (
//     <div className={`product-card ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
//       <img className="product-image" src={imageSrc} alt={name} />
//       <p>{name}</p>
//       <p>{price}</p>
//     </div>
//   );
// };


////////////////////////////////////////////

const ProductSelection = () => {
  const products = [
    { id: 1, name: 'nanova 1 ห่อ', imageSrc: './public/image/LINE_ALBUM_2023.11.23_231123_8_11zon.webp', price: '390฿' },
    { id: 2, name: 'nanova 2 ห่อ', imageSrc: './public/image/LINE_ALBUM_2023.11.23_231123_7_11zon.webp', price: '690฿' },
    { id: 3, name: 'nanova 3 ห่อ', imageSrc: './public/image/LINE_ALBUM_2023.11.23_231123_6_11zon.webp', price: '990฿' },
    { id: 4, name: 'nanova 4 ห่อ', imageSrc: './public/image/LINE_ALBUM_2023.11.23_231123_5_11zon.webp', price: '1550฿' },
    // Add more products as needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
  };

  return (
    <div>
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
        <p className='productname'>สินค้าที่เลือก</p>
        {selectedProduct ? (
          <div className="selected-product-table">
            <div className="table-row">
              <div className="table-cell">ชื่อ:</div>
              <div className="table-cell">{selectedProduct.name}</div>
            </div>
            <div className="table-row">
              <div className="table-cell">ราคา:</div>
              <div className="table-cell">{selectedProduct.price}</div>
            </div>
          </div>
        ) : (
          <p>ยังไม่มีสินค้าที่เลือก</p>
        )}
      </div>
    </div>
  );
};

export default ProductSelection;
