import { useState, useRef } from "react";
import styles from './Form.module.css';
import { FaLine, FaUpload, FaFile } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaTruckFast, FaRegCreditCard, FaCopy } from "react-icons/fa6";
import { Radio } from 'antd';
import axios from 'axios';

const Formname = () => {
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const [productId, setProductId] = useState(''); // Corrected typo in state variable name
  const [productName, setProductName] = useState('')

  const nameInputRef = useRef(null);
  const accountNumberRef = useRef(null);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    setProductId(selectedProduct.id); // Corrected typo in state variable name
    setProductName(selectedProduct.name)
  };

  const handleOrderButtonClick = async () => {
    try {
      if (!customerName || !customerPhone || !customerAddress || !selectedProduct) {
        alert("กรุณากรอกข้อมูลทุกช่อง");
        nameInputRef.current.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const orderData = new FormData();
      orderData.append('customerName', customerName);
      orderData.append('customerPhone', customerPhone);
      orderData.append('customerAddress', customerAddress);
      orderData.append('paymentMethod', paymentMethod);
      orderData.append('productId', productId);
      orderData.append('productName', productName);

      if (paymentMethod === 2) {
        if (!selectedFile) {
          alert("กรุณาแนบไฟล์หลักฐานการโอนเงิน");
          return;
        }
        orderData.append('file', selectedFile);
      }

      const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/order/add-order`, orderData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert("Order Placed Successfully!");

        setCustomerName("");
        setCustomerPhone("");
        setCustomerAddress("");
        setPaymentMethod(1);
        setProductId("");
        setSelectedFile(null);
        setSelectedProduct(null);
        nameInputRef.current.focus();
      } else {
        alert('Error placing order. Please try again.');
      }
    } catch (error) {
      console.error('Error placing order:', error.response);
      alert('Error placing order. Please try again.');
    }
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

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      alert("กรุณาเลือกไฟล์ที่มีนามสกุล .jpg, .jpeg, หรือ .png เท่านั้น");
      setSelectedFile(null);
      event.target.value = null;
      return;
    } else {
      setSelectedFile(file);
    }
  };

  const handleCopyButtonClick = () => {
    if (accountNumberRef.current) {
      accountNumberRef.current.select();
      document.execCommand('copy');
    }
  };

  const products = [
    { id: 1, name: 'nanoVA 1 ถุง', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_8_11zon.jpg', price: '390฿' },
    { id: 2, name: 'nanoVA 2 ถุง', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_7_11zon.jpg', price: '690฿' },
    { id: 3, name: 'nanoVA 3 ถุง', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_6_11zon.jpg', price: '990฿' },
    { id: 4, name: 'nanoVA 5 ถุง', imageSrc: '/image/LINE_ALBUM_2023.11.23_231123_5_11zon.jpg', price: '1550฿' },
    
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
              <FaLine size={30} /> LINE
            </a>
            <button
              className={styles.callButton}
              onClick={handleCallButtonClick}
            >
              <IoCall size={30} /> โทร
            </button>
            <button
              className={styles.orderButton}
              onClick={handleOrderButtonClick}
            >
              <TiShoppingCart size={30} />สั่งซื้อ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formname;