import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      minHeight: 362,
      backgroundImage: `url('https://travellersisle.com/wp-content/uploads/2020/03/Udawalawe-or-Yala-national-park.webp)`,
      backgroundPosition: 'cover'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 26
      }}>
        <Card
          hoverable
          style={{ width: '25vw', minWidth: 200 }}
          cover={<img width="50%" src="./logo.svg" />}
          onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=94779600845'}
        >
          <Meta title="Great things coming soon." description={<a href='https://api.whatsapp.com/send?phone=94779600845'>Contact Us</a>} />
        </Card>

      </div>
    </div>
  );
};

export default Welcome;
