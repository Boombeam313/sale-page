
import  { useState, useRef } from "react";
import styles from './Form.module.css';
import { FaLine, FaUpload, FaFile } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { FaTruckFast, FaRegCreditCard, FaCopy } from "react-icons/fa6";
import { Radio } from 'antd';
import axios from 'axios'

const Formname = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const nameInputRef = useRef(null);
  const accountNumberRef = useRef(null);

  const handleOrderButtonClick = async () => {
    try {
      const orderData = new FormData();
      orderData.append('name', name);
      orderData.append('phone', phone);
      orderData.append('address', address);
      orderData.append('paymentMethod', paymentMethod);
      if (paymentMethod === 2) {
        orderData.append('accountNumber', accountNumberRef);
      }
      if (selectedFile) {
        orderData.append('file', selectedFile);
      }

      // Make a POST request to the server
      const response = await axios.post('http://localhost:888/api/order/ordering', orderData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server Response:', response.data);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
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
      setPhone(input);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCopyButtonClick = () => {
    if (accountNumberRef.current) {
      accountNumberRef.current.select();
      document.execCommand('copy');
    }
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
                      <FaUpload /> Upload File
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
    <div>
      <div className={styles.nameinput}>
        <input
          type="text"
          id="name"
          placeholder="ชื่อ-นามสกุล"
          value={name}
          onChange={(event) => setName(event.target.value)}
          ref={nameInputRef}
        />
      </div>
      <div className={styles.phoneinput}>
        <input
          type="text"
          id="phone"
          placeholder="เบอร์โทร"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className={styles.addresstextarea}>
        <textarea
          id="address"
          placeholder="กรุณากรอกที่อยู่จัดส่งสินค้า"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>

      <div className={styles.checkboxcollectngin}>
        <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
          <Radio value={1}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เก็บเงินปลายทาง  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaTruckFast />
          </Radio>
        </Radio.Group>
      </div>

      <div className={styles.checkboxcollectngin}>
        <Radio.Group onChange={handlePaymentMethodChange} value={paymentMethod}>
          <Radio value={2}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โอนเงิน   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaRegCreditCard />
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
            <FaLine /> สอบถาม
          </a>
          <button
            className={styles.callButton}
            onClick={handleCallButtonClick}
          >
            <IoCall /> โทร
          </button>
          <button
            className={styles.orderButton}
            onClick={handleOrderButtonClick}
          >
            <TiShoppingCart /> สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formname;
