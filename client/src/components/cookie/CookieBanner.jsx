import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";


const Cookbaner = () => {
  const [cookieSettings, setCookieSettings] = useState({
    showCookieSettings: false,
    necessary: true,
    statistics: true,
    marketing: true,
  });

  const handleCheckboxChange = (type, event) => {
    event.persist();
    setCookieSettings((prevSettings) => ({
      ...prevSettings,
      [type]: !prevSettings[type],
    }));
  };

  const checkboxStyle = {
    width: "30px",
    height: "30px",
    marginRight: "5px",
  };

  const navigateToCookiePolicy = () => {
    try {
      const article1Path = "/article1";
      window.location.href = article1Path;
      console.log("Navigated to Article1");
    } catch (error) {
      console.error("Error navigating to Article1:", error);
    }
  };

  const navigateToCookies = () => {
    try {
      const CookiesPath = "/Cookies";
      window.location.href = CookiesPath;
      console.log("Navigated to Cookies");
    } catch (error) {
      console.error("Error navigating to Cookies:", error);
    }
  };

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="ยอมรับคุกกี้"
        cookieName="myCookieConsent"
        style={{ background: "#2B373B", fontSize: "20px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "30px" }}
        expires={150}
      
      >
        <div>
          เว็บไซต์ dullskins.com มีการใช้งานเทคโนโลยีคุกกี้ หรือ เทคโนโลยีอื่นที่มีลักษณะใกล้เคียงกันกับคุกกี้ บนเว็บไซต์ของเรา โปรดศึกษา นโยบายการใช้คุกกี้ และ นโยบายความเป็นส่วนตัวของข้อมูล ก่อนใช้บริการเว็บไซต์ ได้ที่ลิงค์ด้านล่าง 
          &nbsp;&nbsp;&nbsp;&nbsp; <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={() => setCookieSettings((prevSettings) => ({ ...prevSettings, showCookieSettings: true }))}
          >
            ตั้งค่าคุกกี้
          </span>&nbsp;&nbsp;&nbsp;&nbsp;

          {" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={navigateToCookies}
          >
             นโยบายการใช้คุกกี้
          </span>&nbsp;&nbsp;&nbsp;&nbsp;
        
        {" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#fff",
            }}
            onClick={navigateToCookiePolicy}
          >
             นโยบายความเป็นส่วนตัวของข้อมูล
          </span>
        </div>

        {cookieSettings.showCookieSettings && (
          <div style={{ marginTop: "10px", color: "#fff" }}>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={cookieSettings.necessary}
                  onChange={(event) => handleCheckboxChange("necessary", event)}
                  disabled
                  style={checkboxStyle}
                />
                คุกกี้ที่จำเป็น: คุกกี้ที่จำเป็นต่อการใช้งานเว็บไซต์ หากขาดคุกกี้ประเภทนี้ เว็บไซต์จะไม่สามารถใช้งานได้อย่างปกติ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={cookieSettings.statistics}
                  onChange={(event) => handleCheckboxChange("statistics", event)}
                  style={checkboxStyle}
                />
                คุกกี้เก็บสถิติ: คุกกี้ที่ใช้เก็บสถิติการเข้าใช้บริการเว็บไซต์
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={cookieSettings.marketing}
                  onChange={(event) => handleCheckboxChange("marketing", event)}
                  style={checkboxStyle}
                />
                คุกกี้การตลาด: คุกกี้ที่ใช้ในการตลาดออนไลน์ ใช้เพื่อนำเสนอข้อมูลทางการตลาดให้เหมาะสมเฉพาะบุคคลมากยิ่งขึ้น
              </label>
            </div>
            <div>
              <span
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onClick={() => setCookieSettings((prevSettings) => ({ ...prevSettings, showCookieSettings: false }))}
              >
                ปิด
              </span>
            </div>
          </div>
        )}
      </CookieConsent>
    </div>
  );
};

export default Cookbaner;
