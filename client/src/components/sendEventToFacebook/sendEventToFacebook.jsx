const axios = require('axios');

// กำหนดค่า Pixel ID และ Access Token ของคุณ
const pixelID = 'YOUR_PIXEL_ID';
const accessToken = 'YOUR_ACCESS_TOKEN';

// สร้างฟังก์ชันเพื่อส่งข้อมูลเหตุการณ์ไปยัง Facebook CAPI
const sendEventToFacebook = async () => {
  // กำหนด URL สำหรับส่งข้อมูลเหตุการณ์
  const endpoint = `https://graph.facebook.com/v12.0/${pixelID}/events?access_token=${accessToken}`;

  // กำหนดข้อมูลเหตุการณ์ที่จะส่ง
  const eventData = {
    data: [
      {
        event_name: 'Purchase',  // ชื่อเหตุการณ์ (ตัวอย่างเช่น 'Purchase')
        user_data: {
          email: 'user@example.com',  // ข้อมูลผู้ใช้ (ตัวอย่างเช่น email)
          name: 'John Doe',
          address: '123 Main Street',
        },
        event_time: Math.floor(Date.now() / 1000),  // เวลาเหตุการณ์ (timestamp)
        // สามารถเพิ่มข้อมูลเหตุการณ์เพิ่มเติมตามต้องการ
      },
    ],
  };

  try {
    // ใช้ Axios ทำ HTTP POST request ส่งข้อมูลเหตุการณ์ไปยัง Facebook CAPI
    const response = await axios.post(endpoint, eventData);
    console.log('Event sent successfully:', response.data);
  } catch (error) {
    // หากเกิดข้อผิดพลาดในการส่งข้อมูล
    console.error('Error sending event:', error.response.data);
  }
};

// เรียกใช้ฟังก์ชันสำหรับส่งข้อมูลเหตุการณ์
sendEventToFacebook();
