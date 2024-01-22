import React, { useState, useRef, useEffect } from "react";

const Form = () => {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const nameInputRef = useRef();

  useEffect(() => {
    if (step === 1) {
      nameInputRef.current.focus();
    }
  }, [step]);

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      setPhone(inputValue);
    }
  };

  const handleOrderButtonClick = () => {
    // Check if the name is filled in before allowing to proceed
    if (name.trim() === "") {
      alert("กรุณากรอกชื่อ-นามสกุลก่อนทำการสั่งซื้อ");
      nameInputRef.current.focus();
    } else {
      // Proceed to the next step or perform the order submission logic
      alert("สั่งซื้อสำเร็จ!");
      // For example, move to the next step
      setStep(step + 1);
    }
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <div>
            <label htmlFor="name" className="visually-hidden">
            </label>
            <input
              type="text"
              id="name"
              placeholder="ชื่อ-นามสกุล"
              value={name}
              onChange={(event) => setName(event.target.value)}
              ref={nameInputRef}
            />
          </div>
          <div>
            <input
              type="number"
              id="phone"
              placeholder="เบอร์โทร"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div >
            <textarea
              id="address"
              placeholder="กรุณากรอกที่อยู่จัดส่งสินค้า"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              
            />
            <div style={{ height: '100px', backgroundColor: '#ffff00', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => alert("สอบถาม")}
              >
                สอบถาม
              </button>
              <button
                style={{ backgroundColor: "green" }}
                onClick={() => alert("โทร")}
              >
                โทร
              </button>
              <button
                style={{ backgroundColor: "blue" }}
                onClick={handleOrderButtonClick}
                disabled={name.trim() === ""}
              >
                สั่งซื้อ
              </button>
            </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <p>ข้อมูลที่กรอก:</p>
          <p>ชื่อ-นามสกุล: {name}</p>
          <p>เบอร์โทร: {phone}</p>
          <p>ที่อยู่: {address}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
