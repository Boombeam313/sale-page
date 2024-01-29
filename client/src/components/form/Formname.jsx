// Formname.js

import  { useState, useRef } from "react";
import styles from './Form.module.css';
import { FaLine, FaUpload, FaFile } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaTruckFast, FaRegCreditCard, FaCopy } from "react-icons/fa6";
import { Radio } from 'antd';
import axios from 'axios'



const Formname = () => {
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [productId, setProdcutId] = useState('')
  const nameInputRef = useRef(null);
  const accountNumberRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    setProdcutId(selectedProduct.id)
  };

  const handleOrderButtonClick = async() => {
    // แสดงข้อมูลที่ต้องการลงใน console
    try {
      const orderData = new FormData();
      orderData.append('customerName', customerName);
      orderData.append('customerPhone', customerPhone);
      orderData.append('customerAddress', customerAddress);
      orderData.append('paymentMethod', paymentMethod);
      orderData.append('productId', productId )
      if (paymentMethod === 2) {
        orderData.append('accountNumber', accountNumberRef);
      }
      if (selectedFile) {
        orderData.append('file', selectedFile);
      }
      // console.log('orderData', orderData)
      // Make a POST request to the server
      const response = await axios.post('http://localhost:888/api/order/add-order', orderData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server Response:', response.data);
      // alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error.response);
      // alert('Error placing order. Please try again.');

    }
    alert("Order placed successfully!");

    // โฟกัสที่ input ชื่อ-นามสกุล
    nameInputRef.current.focus();
  };

  const handleCallButtonClick = () => {
    const phoneNumber = "0825162412";
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    if (/^\d+$/.test(input) || input === "") {
      setCustomerPhone(input);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('file', file
    ) 
  };

  const handleCopyButtonClick = () => {
    if (accountNumberRef.current) {
      accountNumberRef.current.select();
      document.execCommand('copy');
    }
  };

  const products = [
    { id: 1, name: 'nanova 1 ห่อ', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_8_11zon.webp', price: '390฿' },
    { id: 2, name: 'nanova 2 ห่อ', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_7_11zon.webp', price: '690฿' },
    { id: 3, name: 'nanova 3 ห่อ', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_6_11zon.webp', price: '990฿' },
    { id: 4, name: 'nanova 4 ห่อ', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_5_11zon.webp', price: '1550฿' },
    // Add more products as needed
  ];

  const ProductCard = ({ id, name, imageSrc, price, onSelect, isSelected }) => {
    const handleSelect = () => {
      onSelect({ id, name, price, isSelected: !isSelected });
      
    };
  
    return (
      <div className={`product-card ${isSelected ? 'selected' : ''}`} onClick={handleSelect}>
        <img className="product-image" src={imageSrc} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    );
  };

  const renderBankAccountDetails = () => {
    if (paymentMethod === 2) {
      return (
        
        <div className={styles.bankAccountDetails}>
          
          <p>กรุณาโอนเงินไปที่บัญชีธนาคาร</p>
          <table className={styles.bankAccountTable}>
            <tbody>
              <tr>
                <td>ธนาคาร</td>
                <td>กสิกรไทย</td>
              </tr>
              <tr>
                <td>ชื่อบัญชี</td>
                <td>บริษัท นาโนเวิร์ส จำกัด</td>
              </tr>
              <tr>
                <td>เลขบัญชี</td>
                <td className={styles.accountNumberRef}>
                  <input
                    type="text"
                    readOnly
                    value="133-3-48377-3"
                    ref={accountNumberRef}
                  />
                  <button className={styles.copybutton} onClick={handleCopyButtonClick}><FaCopy /> คัดลอก</button>
                </td>
              </tr>
              <tr>
                <td>หลักฐานการโอนเงิน</td>
                <td>
                  <div className={styles.uploadButton}>
                    <label htmlFor="fileInput" className={styles.uploadLabel}>
                      <FaUpload /> เลือกไฟล์
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      accept=".jpg, .jpeg, .png, .gif"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                    {selectedFile && (
                      <span className={styles.selectedFile}>
                        <FaFile /> {selectedFile.name}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return null;
  };

  return (

    <>
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
    
    <div>
      <div className={styles.nameinput}>
        <input
          type="text"
          id="name"
          placeholder="ชื่อ-นามสกุล"
          value={customerName}
          onChange={(event) => setCustomerName(event.target.value)}
          ref={nameInputRef}
          />
      </div>
      <div className={styles.phoneinput}>
        <input
          type="text"
          id="phone"
          placeholder="เบอร์โทร"
          value={customerPhone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className={styles.addresstextarea}>
        <textarea
          id="address"
          placeholder="กรุณากรอกที่อยู่จัดส่งสินค้า"
          value={customerAddress}
          onChange={(event) => setCustomerAddress(event.target.value)}
          />
      </div>

      <div className={styles.checkboxcollectngin}>
        <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
          <Radio value={1}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เก็บเงินปลายทาง   &nbsp; <FaTruckFast />
          </Radio>
        </Radio.Group>
      </div>

      <div className={styles.checkboxcollectngin}>
        <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
          <Radio value={2}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; โอนเงิน &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <FaRegCreditCard />
          </Radio>
        </Radio.Group>
      </div>

      {renderBankAccountDetails()}
      <div className={styles.ConfirmButton}>
        <button onClick={handleOrderButtonClick}>ยืนยันคำสั่งซื้อ</button>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.buttonGroup}>
          <a
            href="https://page.line.me/579vamkm?openQrModal=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.questionButton}
            >
            <FaLine  size={30}/> สอบถาม
          </a>
          <button
            className={styles.callButton}
            onClick={handleCallButtonClick}
            >
            <IoCall size={30}/> โทร
          </button>
          <button
            className={styles.orderButton}
            onClick={handleOrderButtonClick}
            >
            <TiShoppingCart size={30}/> สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
            </>
  );
};

export default Formname;