import React from 'react';
import style from './Moneybutton.module.css'; // Assuming you have a CSS module named Moneybutton.css

const Moneybutton = () => {
  const phoneNumber = '0825162412';

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
        <button
          className={style.buttonLine}
          onClick={() => window.location.href = 'https://page.line.me/579vamkm?openQrModal=true'}
        >
          Line
        </button>
        <button
          className={style.buttonFacebook}
          onClick={() => window.location.href = 'https://www.facebook.com/nanoVAcoffee2023/?mibextid=LQQJ4d'}
        >
          Facebook
        </button>
        <button
          className={style.buttonCall}
          onClick={() => window.location.href = `tel:${phoneNumber}`}
        >
          โทร
        </button>
      </div>
    </div>
  );
};

export default Moneybutton;
