require("dotenv").config();
const axios = require("axios");

const lineNotifyWithImages = async (message, file) => {
    try {
        const lineForm = new FormData();
        // lineForm.append('message', message);
        const imageBlob = new Blob([file.buffer], { type: file.mimetype });

        lineForm.append('imageFile', imageBlob, file.originalname);
    
    //   console.log('image in line ', file.buffer)
      const response = await axios.post(
        "https://notify-api.line.me/api/notify",
        lineForm,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
            Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
          },
        }
      );
  
      console.log("Line Notify response:", response.data);
    } catch (error) {
      console.error("Error sending Line Notify message:", error.message);
    }
  };
  
  const lineNotify = async (message) => {

    try {

      const response = await axios.post(
        "https://notify-api.line.me/api/notify",
        `message=${message}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
          },
        }
      );
  
    //   console.log("Line Notify response:", response.data);
    } catch (error) {
      console.error("Error sending Line Notify message:", error.message);
    }
  };
  

module.exports = {
  lineNotify,
  lineNotifyWithImages
};
