// Form.js

import React, { useState, useRef } from "react";
import styles from './Form.module.css';
import { FaLine } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const Formname = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const nameInputRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const handleOrderButtonClick = () => {
    alert("Order placed successfully!");
    nameInputRef.current.focus();
  };

  const handleCallButtonClick = () => {
    const phoneNumber = "0825162412";
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    // Check if the input is a non-negative number
    if (-/^\d+$/.test(input) || input === "") {
      setPhone(input);
    }
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
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        />
        <label className="checkboxlabel" htmlFor="checkbox">
        เลือก
        {checked && " (เลือกแล้ว)"}
        </label>
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
