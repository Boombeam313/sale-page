import React, { useEffect, useRef } from 'react';
import './text.css'; // Import the CSS file
import { ImCross } from "react-icons/im";
import Moneybutton from '../moneybutton/Moneybutton';

export default function Text() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection1 = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video 1 is in view, play
          videoRef1.current.play();
        } else {
          // Video 1 is out of view, pause
          videoRef1.current.pause();
        }
      });
    };

    const handleIntersection2 = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video 2 is in view, play
          videoRef2.current.play();
        } else {
          // Video 2 is out of view, pause
          videoRef2.current.pause();
        }
      });
    };
    

    const observer1 = new IntersectionObserver(handleIntersection1, options);
    const observer2 = new IntersectionObserver(handleIntersection2, options);

    observer1.observe(videoRef1.current);
    observer2.observe(videoRef2.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, [videoRef1, videoRef2]);

  return (
    <>
      <div>
      <div className="convideo">
  <video autoPlay controls muted ref={videoRef1} src="videos/ปัญหา.mp4" type="video/mp4" />
</div>



        <div className="product-promotion-title">
          หมดเงิน หลายหมื่น แถม <span className="product-promotion-subtitle">ไม่เห็นผล</span>
        </div>

        <div className="producttext2">
          พอกันทีกับการ เสียเงิน เสียเวลา ไปกับการ <span className="producttext3">ดูแลผิวและควบคุมน้ำหนัก</span>
        </div>

        <div className="producttext4">
          ที่ต้องเสียเงินไปอย่างสิ้นเปลือง ให้ <span className="producttext5">nanoVA</span><span className="producttext6">ช่วยดูแลคุณ แค่ดื่มวันละ 1 - 2 แก้ว</span>
        </div>

        <Moneybutton />

        <div className="producttext7">
          สารสกัด <span className="producttext5"></span>
        </div>

        <div className="producttext8">
          ของผลิตภัณฑ์ <span className="producttext5"></span>
        </div>

        <div className="product-promotion-container">
          <div>
            <img
              src="image/product1.webp"
              alt="product"
              className="product-promotion-image"
            />
          </div>
        </div>

        <div className="con2video">
          <video autoPlay muted ref={videoRef2} src="videos/nanoVA1.mp4" type="video/mp4" />
        </div>


      <div className="productimage">
        <div>
          <img
            src="image2/Collagen peptides.jpg"
            alt="product"
            className="productimage"
          />
        </div>
      </div>

      <div className="title">
      <p>คอลลาเจนเปปไทด์ :<span className='title2-1'> Collagen Peptide (ปลาคอด จากประเทศนอเวย์)</span> </p>
      </div>

<div className="font-family1">
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;คอลลาเจนเปปไทด์ ทำงานโดยการเสริมสร้างคอลลาเจนในร่างกาย พบได้ทั่วไปในผิวหนัง กระดูก ข้อต่อ และเส้นเอ็น ช่วยให้โครงสร้างเหล่านี้แข็งแรงและยืดหยุ่น</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;กระบวนการผลิตจะเริ่มต้นด้วยการสกัดโปรตีนคอลลาเจนจากหนังปลา จากนั้นจึงย่อยโปรตีนคอลลาเจนให้เป็นเปปไทด์คอลลาเจนสามารถดูดซึมเข้าสู่ร่างกายได้ง่ายกว่าโปรตีนคอลลาเจนในรูปเดิม 
  เมื่อเข้าสู่ร่างกายแล้ว เปปไทด์คอลลาเจนจะถูกนำไปใช้ในการสร้างโปรตีนคอลลาเจนใหม่</p>
<p className='title2-1'>แหล่งที่มา </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;คอลลาเจนเปปไทด์ ปลาคอดจากประเทศนอเวย์ เป็นคอลลาเจนเปปไทด์ที่ผลิตจากหนังปลาคอด จากประเทศนอร์เวย์ 
  ซึ่งเป็นแหล่งผลิตปลาคอดคุณภาพสูงแห่งหนึ่งของโลก ปลาคอดจากนอร์เวย์นั้นอาศัยอยู่ในน้ำทะเลที่สะอาดและอุดมไปด้วยแร่ธาตุ ส่งผลให้คอลลาเจนเปปไทด์จากปลาคอดจากประเทศนอร์เวย์นั้นมีคุณภาพสูง มีปริมาณโปรตีนสูง และโมเลกุลขนาดเล็ก ทำให้ร่างกายดูดซึมได้ง่าย</p>
</div>

<div className="productimage2">
        <div>
          <img
            src="image2/Wheat Fiber.jpg"
            alt="product"
            className="productimage2"
          />
        </div>
      </div>
<div className="title2">
<div>
<p>ไฟเบอร์จากข้าวสาลี :<span className='title2-1'> Wheat Fiber (นำเข้าจากฝรั่งเศส)</span> </p>
</div>
</div>


<div className="font-family2">
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;ไฟเบอร์จากข้าวสาลี ทำงานโดยการเพิ่มกากใยอาหารในระบบทางเดินอาหาร 
สารอาหารที่ไม่ย่อยและไม่ดูดซึมเข้าสู่ร่างกาย แต่จะช่วยเพิ่มปริมาตรของอุจจาระและทำให้อุจจาระอ่อนนุ่มขึ้น ช่วยให้ขับถ่ายได้ง่ายขึ้น ไฟเบอร์จากข้าวสาลี มีเส้นใยอาหารชนิดไม่ละลายน้ำสูง
นอกจากนี้ ยังมีสารต้านอนุมูลอิสระที่ช่วยปกป้องเซลล์จากความเสียหายอีกด้วย</p>
<p className='title2-1'>แหล่งที่มา </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;ไฟเบอร์จากข้าวสาลีจากฝรั่งเศส ผลิตจากข้าวสาลีที่ปลูกในประเทศฝรั่งเศส โดยกระบวนการสกัดเส้นใยจากข้าวสาลี
   ผ่านกระบวนการทางกายภาพและทางเคมี โดยไม่ใช้สารเคมีใดๆ ในระหว่างกระบวนการผลิต </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;ไฟเบอร์จากข้าวสาลีจากฝรั่งเศส มีลักษณะเป็นผงสีขาว มีรสจืด ไม่มีกลิ่น ละลายน้ำได้ดี มีคุณสมบัติเป็นใยอาหาร 
  มีปริมาณกากใยสูงถึง 99% ช่วยให้ร่างกายรู้สึกอิ่มนานขึ้น ช่วยลดการดูดซึมคอเลสเตอรอล 
  และช่วยลดความเสี่ยงในการเกิดโรคอ้วน โรคหัวใจ โรคเบาหวาน และโรคมะเร็งลำไส้ใหญ่</p>
</div>

<div className="productimage3">
        <div>
          <img
            src="image2/L-Glutathione.jpg"
            alt="product"
            className="productimage3"
          />
        </div>
      </div>

    
      <div className="title3">
<div>
<p>แอล-กลูตาไธโอน : <span className='title2-1'> L-Glutathione</span></p>
</div>
</div>


      <div className="font-family3">
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;L-Glutathione ทำงานโดยการจับกับอนุมูลอิสระ และทำให้อนุมูลอิสระสูญเสียพลังงาน จึงไม่สามารถทำลายเซลล์ได้ และช่วยกระตุ้นการทำงานของเอนไซม์ต้านอนุมูลอิสระอื่นๆ
   ทำให้ร่างกายสามารถกำจัดอนุมูลอิสระได้อย่างมีประสิทธิภาพมากขึ้น</p>
<p className='title2-1'>แหล่งที่มา </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;แอล-กลูตาไธโอนเป็นสารต้านอนุมูลอิสระที่พบได้ในทุกเซลล์ของร่างกาย 
แต่ปริมาณที่ผลิตได้อาจไม่เพียงพอต่อความต้องการในบางกรณี เช่น ผู้ที่มีอายุมากขึ้น ผู้ที่มีโรคบางชนิด เช่น โรคตับ โรคไต หรือโรคมะเร็ง และผู้ที่รับประทานอาหารที่มีกลูตาไธโอนต่ำ</p>

</div>
<div className="productimage4">
        <div>
          <img
            src="image2/Ginkgo biloba leaves.jpg"
            alt="product"
            className="productimage4"
          />
        </div>
      </div>

      <div className="title4">
<div>
<p>สารสกัดจากใบแปะก๊วย : <span className='title2-1'> Ginkgo Extract</span></p>
</div>
</div>

<div className="font-family5">
<p className='title2-1'>หลักการทำงาน</p>
<p>สารสกัดจากใบแปะก๊วยทำงาน ออกฤทธิ์ต่อระบบไหลเวียนโลหิตและระบบประสาท</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; เพิ่มการไหลเวียนโลหิต ช่วยขยายหลอดเลือดและลดการเกาะตัวของเกล็ดเลือด ทำให้เลือดไหลเวียนได้ดีขึ้น ซึ่งส่งผลดีต่อสุขภาพโดยรวม 
  เช่น ช่วยลดความเสี่ยงในการเกิดโรคหัวใจ โรคหลอดเลือดสมอง โรคเบาหวาน และโรคอัลไซเมอร์ </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; สารสกัดจากใบแปะก๊วยสามารถช่วยปกป้องเซลล์ประสาท ซึ่งอาจส่งผลดีต่อโรคที่เกี่ยวข้องกับระบบประสาท เช่น โรคอัลไซเมอร์โรคพาร์กินสัน และโรคหลอดเลือดสมอง</p>
<p className='title2-1'>แหล่งที่มา</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;ใบแปะก๊วยมีถิ่นกำเนิดในจีนและญี่ปุ่น มีอายุยืนยาวกว่า 200 ล้านปี จึงได้รับการขนานนามว่าเป็น 
  "ต้นไม้แห่งชีวิต" ชาวจีนโบราณใช้ใบแปะก๊วยรักษาโรคต่างๆ มากมาย เช่น โรคลมชัก โรคหอบหืด 
  โรคหลอดเลือดสมอง และโรคอัลไซเมอร์ ในปัจจุบัน สารสกัดจากใบแปะก๊วยสามารถใช้เป็นยารักษาโรคความจำเสื่อม </p>

</div>
<div className="productimage5">
        <div>
          <img
            src="image2/Vitamin B.jpg"
            alt="product"
            className="productimage4"
          />
        </div>
      </div>


      <div className="title5">
<div>
<p className="title4">วิตามินบีรวม</p>
</div>
</div>

<div className="font-family6">
<p className='title2-1'>วิตามินบี1 : Vitamin B1</p>
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;วิตามินบี 1 เผาผลาญอาหาร ช่วยให้ร่างกายนำพลังงานจากอาหารไปใช้ได้อย่างมีประสิทธิภาพ</p>
<p className='title2-1'>แหล่งที่มา</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกธัญพืชไม่ขัดสี เช่น ข้าวซ้อมมือ ข้าวกล้อง ข้าวโพด ขนมปังโฮลวีต</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกเนื้อสัตว์ เช่น เนื้อหมู เนื้อไก่ เนื้อปลา ตับ </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกถั่วเมล็ดแห้ง เช่น ถั่วเหลือง ถั่วลิสง ถั่วเขียว ถั่วแดง</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกไข่ </p>
</div>

<div className="title6">
<div>
<p>วิตามินบี2 : <span className='title2-1'> Vitamin B2</span></p>
</div>
</div>

<div className="font-family7">

<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;วิตามินบี2 ทำงานร่วมกับวิตามินบีอื่นๆ ในกระบวนการเปลี่ยนอาหารให้เป็นพลังงาน ช่วยให้ระบบประสาทและกล้ามเนื้อทำงานอย่างมีประสิทธิภาพ 
  และยังช่วยปกป้องเซลล์จากความเสียหายของอนุมูลอิสระ</p>
<p className='title2-1'>แหล่งที่มาของวิตามินบี2 </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกนมและผลิตภัณฑ์จากนม เช่น นม โยเกิร์ต ชีส</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกเนื้อสัตว์ เช่น เนื้อวัว เนื้อหมู เนื้อไก่ ตับ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกไข่ </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกถั่วเมล็ดแห้ง เช่น ถั่วเหลือง ถั่วลิสง ถั่วเขียว ถั่วแดง</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกผัก เช่น ผักใบเขียว เห็ดหูหนู</p>
  </div>

  <div className="title7">
<div>
<p>วิตามินบี6 : <span className='title2-1'> Vitamin B6</span></p>
</div>
</div>


<div className="font-family8">
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;วิตามินบี6 จำเป็นสำหรับการสร้างสารสื่อประสาทในสมอง มีหน้าที่สำคัญในการควบคุมอารมณ์ 
  การเรียนรู้ ความจำ และการทำงานของระบบประสาท</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยการทำงานของเซลล์เม็ดเลือดขาวอย่างมีประสิทธิภาพ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยเปลี่ยนโปรตีน คาร์โบไฮเดรต และไขมันให้เป็นพลังงาน  </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยป้องกันอาการคลื่นไส้และอาเจียน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยรักษาผิวพรรณให้แข็งแรง โดยช่วยกระตุ้นการสร้างคอลลาเจน 
  ซึ่งเป็นโปรตีนที่ช่วยให้ผิวพรรณเต่งตึงและยืดหยุ่น</p>
  <p className='title2-1'>แหล่งที่มา ได้แก่</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกเนื้อสัตว์ เช่น เนื้อหมู เนื้อไก่ เนื้อปลา ตับ</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกธัญพืชไม่ขัดสี เช่น ข้าวซ้อมมือ ข้าวกล้อง ข้าวโพด ขนมปังโฮลวีต</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกถั่วเมล็ดแห้ง เช่น ถั่วเหลือง ถั่วลิสง ถั่วเขียว ถั่วแดง</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; อาหารจำพวกผัก เช่น มันฝรั่ง กล้วย แตงโม ผักโขม</p>
  
    </div>

    <div className="title8">
<div>
<p>วิตามินบี12 : <span className='title2-1'> Vitamin B12</span></p>
</div>
</div>

<div className="font-family8">
<p className='title2-1'>หลักการทำงาน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;วิตามินบี6 จำเป็นสำหรับการสร้างสารสื่อประสาทในสมอง มีหน้าที่สำคัญในการควบคุมอารมณ์ 
  การเรียนรู้ ความจำ และการทำงานของระบบประสาท</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยการทำงานของเซลล์เม็ดเลือดขาวอย่างมีประสิทธิภาพ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยเปลี่ยนโปรตีน คาร์โบไฮเดรต และไขมันให้เป็นพลังงาน  </p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยป้องกันอาการคลื่นไส้และอาเจียน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; ช่วยรักษาผิวพรรณให้แข็งแรง โดยช่วยกระตุ้นการสร้างคอลลาเจน 
  ซึ่งเป็นโปรตีนที่ช่วยให้ผิวพรรณเต่งตึงและยืดหยุ่น</p>
  <p className='title2-1'>แหล่งที่มา ได้แก่</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;อาหารจำพวกเนื้อสัตว์ เช่น เนื้อหมู เนื้อไก่ เนื้อปลา ตับ</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;อาหารจำพวกธัญพืชไม่ขัดสี เช่น ข้าวซ้อมมือ ข้าวกล้อง ข้าวโพด ขนมปังโฮลวีต</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;อาหารจำพวกถั่วเมล็ดแห้ง เช่น ถั่วเหลือง ถั่วลิสง ถั่วเขียว ถั่วแดง</p>
  <p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;อาหารจำพวกผัก เช่น มันฝรั่ง กล้วย แตงโม ผักโขม</p>
  
    </div>


    
    <div className="productimage6">
        <div>
          <img
            src="image2/calcium.jpg"
            alt="product"
            className="productimage4"
          />
        </div>
      </div>


      <div className="title9">
<div >
<p className="title9">แคลเซียม : <span className='title2-1'> calcium </span></p>
</div>
</div>

      <div className="font-family9">
<p className='title2-1'>หลักทำงาน</p>
<p>กระดูกและฟัน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; แคลเซียมเป็นองค์ประกอบหลักของกระดูกและฟัน แคลเซียมจับกับฟอสฟอรัส membentukผลึก hydroxyapatite ซึ่งเป็นโครงสร้างหลักของกระดูกและฟัน</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; แคลเซียมช่วยกระตุ้นเซลล์สร้างกระดูก (osteoblasts) และยับยั้งเซลล์สลายกระดูก (osteoclasts) ช่วยให้กระดูกมีความแข็งแรงและหนาแน่น</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; แคลเซียมยังช่วยรักษาสมดุลของแร่ธาตุในกระดูก ป้องกันภาวะกระดูกพรุน</p>
<p>กล้ามเนื้อ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp; แคลเซียมจำเป็นสำหรับการหดตัวของกล้ามเนื้อ แคลเซียมจะจับกับโปรตีน troponin ซึ่งจะกระตุ้นการหดตัวของกล้ามเนื้อ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	แคลเซียมยังช่วยควบคุมการทำงานของระบบประสาท ช่วยให้ระบบประสาทส่งสัญญาณไปยังกล้ามเนื้อได้อย่างถูกต้อง</p>
<p>เลือด</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	แคลเซียมจำเป็นสำหรับการแข็งตัวของเลือด แคลเซียมจะช่วยเปลี่ยนโปรตีน fibrinogen เป็น fibrin ซึ่งเป็นลิ่มเลือดที่ช่วยหยุดเลือดไหล</p>
<p>หัวใจ</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	แคลเซียมช่วยควบคุมการเต้นของหัวใจ แคลเซียมจะช่วยกระตุ้นการหดตัวของกล้ามเนื้อหัวใจ</p>
<p>การดูดซึมแคลเซียม</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	แคลเซียมดูดซึมจากลำไส้เล็ก การดูดซึมแคลเซียมจะขึ้นอยู่กับปัจจัยต่างๆ เช่น วิตามินดี กรดฟอสฟอรัส และไฟเบอร์</p>
<p className='title2-1'>แหล่งที่มา</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	นมและผลิตภัณฑ์นม: นม โยเกิร์ต ชีส เป็นแหล่งแคลเซียมที่ดี</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	ผักใบเขียว: ผักใบเขียว เช่น คะน้า ผักโขม กวางตุ้ง เป็นแหล่งแคลเซียมที่ดี</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;•&ensp;	ปลาตัวเล็ก: ปลาตัวเล็กที่กินได้ทั้งกระดูก เช่น ปลาซาร์ดีน กุ้งแห้ง ปลาทู เป็นแหล่งแคลเซียมที่ดี</p>



</div>
 
    <div className="nanovatext">
          nano<span style={{ color: '#710C04' }}>VA</span> <span style={{ color: 'black' }}>coffee</span>
        </div>

    <div className="nanovatext2">
          กาแฟนาโนวา <span className="nano-va-coffee-tagline"></span>
        </div>

        <div className='font-family10'>
<p>กาแฟสำเร็จรูป 18-in-1</p>
<p>หอม กลมกล่อม เข้มข้น เมล็ดกาแฟอาราบิก้าแท้จากประเทศมาเลเซีย</p>
<p>1 ซองพลังงานแค่ 70 กิโลแคลอรี</p>

<p><ImCross style={{ color: 'red' }} /> 0% คอเลสเตอรอล </p>
<p><ImCross style={{ color: 'red' }} /> 0% ไขมันทรานส์</p>
<p>ผิวลื่น อ่อนวัยสุขภาพดีจากคอลลาเจน</p>
<p>รสชาติกลมกล่อม</p>
<p>มีไฟเบอร์สูงช่วยในการขับถ่าย</p>
<p>เร่งระบบเผาผลาญไขมัน คุมหิว อิ่มนาน</p>
<p>เลขที่จดแจ้ง 13-2-02660-2-0091</p>
</div>


      <div className="review-heading">
        รีวิว 
      </div>

    <div className="imagereview1">
      <img
        src="image/review1.jpg"
        alt="imagereview1"
      />
    </div>

    <div className="imagereview2">
      <img
        src="image/review2.jpg"
        alt="review2"
      />
    </div>

    <div className="imagereview3">
      <img
        src="image/review3.jpg"
        alt="review3"
      />
    </div>

    <div className="imagereview4">
      <img
        src="image/review4.jpg"
        alt="review4"
      />
    </div>

    <div className="imagereview5">
      <img
        src="image/review5.jpg"
        alt="review5"
      />
    </div>

    <div className="Testtheproduct">
          มาตรฐานสินค้า 
      </div>

      <div className="imagereview4">
        <img
          src="image/standards1.webp"
          alt="standards1"
        />
      </div>


      <div className="imagereview5">
        <img
          src="image/standards2.webp"
          alt="standards2"
        />
      </div>
      <div className="imagereview6">
        <img
          src="image/standards3.webp"
          alt="standards3"
        />
      </div>
      <div className="imagereview7">
        <img
          src="image/standards4.webp"
          alt="standards4"
        />
      </div>

      <div className="Testtheproduct2">
      ผลิตในโรงงานที่ได้มาตรฐานสากล 
      </div>
      <div className="imagereview8">
        <img
          src="image/factory1.webp"
          alt="factory1"
          className="promotion-img"
        />
      </div>

      <div className="imagereview10">
        <img
          src="image/factory2.webp"
          alt="factory1"
          className="promotion-img"
        />
      </div>

      <div className="imagereview11">
        <img
          src="image/factory3.webp"
          alt="factory1"
          className="promotion-img"
        />
      </div>

      <div className="imagereview9">
        <img
          src="image/promotion.png"
          alt="factory1"
          className="promotion-img"
        />
      </div>
      <div className="small-heading">
          nano <span style={{ fontSize: '144px', color: '#710C04' }}>VA</span> 
        </div>

     </div>
    </>
  );
};