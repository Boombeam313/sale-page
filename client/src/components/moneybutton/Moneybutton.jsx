import React from 'react';
import style from './Moneybutton.module.css'; // Assuming you have a CSS module named Moneybutton.css

const Moneybutton = () => {
  const phoneNumber = '0825162412';

  return (
    <div className={style.container}>
      <button
        className={`${style.buttonLine} ${style.buttonWave}`}
        onClick={() => window.location.href = 'https://page.line.me/579vamkm?openQrModal=true'}
      >
        line
      </button>
      <button
        className={`${style.buttonFacebook} ${style.buttonWave}`}
        onClick={() => window.location.href = 'https://www.facebook.com/nanoVAcoffee2023/?mibextid=LQQJ4d'}
      >
        Facebook
      </button>
      <button
        className={`${style.buttonCall} ${style.buttonWave}`}
        onClick={() => window.location.href = 'tel:${0825162412}'}
      >
        โทร
      </button>
    </div>
  );
};

export default Moneybutton;
