import { CommentOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button, Carousel, Col, Popover, Row, Space } from 'antd';
import React from 'react';

const rootStyle: React.CSSProperties = {
  margin: 0,
  height: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  backgroundImage: `url('./bg.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const contentStyle: React.CSSProperties = {
  height: '100vh',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const mainOverlay: React.CSSProperties = {
  display: 'block',
  position: 'fixed',
  margin: 0,
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundImage: `url('./mol.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // alignContent: 'center',
  // alignItems: 'center',
  // justifyContent: 'center',
  // textAlign: 'center'
};

const Welcome: React.FC = () => {
  return (
    <>
      <Carousel autoplay dotPosition='right' effect='fade'>
        <div><div style={{ ...rootStyle, backgroundImage: `url('./carousel/6M65MFQD7CGXPZQPYRZK7MTLA4.jpg')` }} /></div>
        <div><div style={{ ...rootStyle, backgroundImage: `url('./carousel/1256006-indian-peacock-in-yala-national-park.jpg')` }} /></div>
        <div><div style={{ ...rootStyle, backgroundImage: `url('./carousel/photo-1551316679-9c6ae9dec224.jpeg')` }} /></div>
        <div><div style={{ ...rootStyle, backgroundImage: `url('./carousel/Yala-Banner.jpg')` }} /></div>
        <div><div style={{ ...rootStyle, backgroundImage: `url('./carousel/PXL_20230311_020632528.jpg')` }} /></div>
      </Carousel>
      <div style={mainOverlay}>
        <Row>
          <Col span={14} offset={10} style={contentStyle}>
            <div style={{ marginTop: 48, marginBottom: -36, color: '#ffffff', fontSize: 36 }}>WELCOME TO</div>
            <img src='./logo.svg' width="30%" />
            <div style={{ marginTop: -36, color: '#ffffff', fontSize: 30 }}>EXPLORE THE UNTAMED BEAUTY OF YALA</div>
            <div style={{ color: '#ffffff', fontSize: 18, margin: '16px 120px' }}>Nestled in the heart of Sri Lanka, Yala National Park beckons with its untamed wilderness and awe-inspiring biodiversity. At Yala Tour, we invite you to embark on an unforgettable journey into this natural wonderland. Our mission is to bring you face to face with the majestic beasts that call Yala their home, all while ensuring a seamless and hassle-free experience.</div>
            <div style={{ marginTop: 36, color: '#ffffff', fontSize: 30 }}>What Sets Us Apart?</div>
            <div style={{ fontSize: 18, margin: '16px 120px', color: '#ffffff' }}>
              <Popover title="Seamless Safari Arrangements" content="We take the stress out of planning your safari. Whether you're a solo traveler, a family, or a group of friends, we tailor your safari experience to your preferences. Choose from various packages and customize your journey to witness the wildlife in its natural habitat." trigger="hover">
                <div>Seamless Safari Arrangements</div>
              </Popover>
              <Popover title="Seamless Safari Arrangements" content="Our team of experienced safari guides is your ticket to unlocking the secrets of Yala. They possess an in-depth knowledge of the park, its inhabitants, and their behavior, ensuring you have an enriching and educational experience." trigger="hover">
                <div>Expert Guides</div>
              </Popover>
              <Popover title="Seamless Safari Arrangements" content="We understand that getting to Yala National Park can be a challenge. That's why we offer an instant taxi booking service with fair pricing. Arrive at Yala hassle-free and ready to embark on your safari adventure." trigger="hover">
                <div>Instant Taxi Service</div>
              </Popover>
              <Popover title="Seamless Safari Arrangements" content="Yala Tour is committed to responsible tourism. We follow ethical wildlife viewing practices, ensuring minimal disruption to the animals' natural behaviors and habitats. Your safety and the conservation of this unique ecosystem are our top priorities." trigger="hover">
                <div>Ethical Wildlife Encounters</div>
              </Popover>
            </div>
            <div style={{ marginTop: 36, color: '#ffffff', fontSize: 30 }}>Contact us</div>
            <Space>
              <Button target='_blank' type="text" style={{ color: '#ffffff', fontSize: 24, margin: 12 }} icon={<WhatsAppOutlined />} href='https://api.whatsapp.com/send?phone=94779600845' />
              <Button target='_blank' type="text" style={{ color: '#ffffff', fontSize: 24, margin: 12 }} icon={<InstagramOutlined />} href='https://www.instagram.com/yalatour.lk/' />
              <Button target='_blank' type="text" style={{ color: '#ffffff', fontSize: 24, margin: 12 }} icon={<FacebookOutlined />} href='https://web.facebook.com/profile.php?id=61551096751309' />
              {/* <Button target='_blank' type="text" style={{ color: '#ffffff', fontSize: 24, margin: 12 }} icon={<CommentOutlined />} href='https://api.whatsapp.com/send?phone=94779600845' /> */}
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Welcome;
