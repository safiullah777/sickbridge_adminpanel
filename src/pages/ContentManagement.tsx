import { Col, Input, Typography, Row, Upload, Button, Card, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload';

const ContentManagement = () => {
  const [data, setData] = useState({
    address: '',
    aboutImage3File: '',
    healthImage1File: '',
    healthImage2File: '',
    healthImage3File: '',
    helpImage1File: '',
    helpImage2File: '',
    helpImage3File: '',
    email: '',
    phone: '',
    aboutUs: '',
    footerBottomText: '',
    facebookLink: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log({e})
    setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const onUpload = (info: any) => {
    console.log(info.target.files[0]);
  };
  return (
    <>
      <Typography.Title level={1}>Content Management</Typography.Title>
      <Card title="Website Information" style={{ margin: '20px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: 30,
          }}
        >
          <div>
            <Typography>Adress: </Typography>
            <Input size="middle" onChange={onChange} name="address" placeholder="abc street" />
          </div>
          <div>
            <Typography>Email: </Typography>
            <Input size="middle" name="email" onChange={onChange} placeholder="abc@mail.com" />
          </div>
          <div>
            <Typography>Phone Number: </Typography>
            <Input size="middle" name="phone" onChange={onChange} placeholder="+723467" />
          </div>
          <div>
            <Typography>About US: </Typography>
            <Input.TextArea
              size="middle"
              name="aboutUs"
              onChange={onChange}
              placeholder="About Company"
            ></Input.TextArea>
          </div>
          <div>
            <Typography>Footer Bottom Text: </Typography>
            <Input.TextArea
              size="middle"
              name="footerBottomText"
              onChange={onChange}
              placeholder="Like: Copyright 2022 - All Rights Reserved"
            ></Input.TextArea>
          </div>
        </div>
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="primary">Update</Button>
        </div>{' '}
      </Card>
      <Card title="Social Links" style={{ margin: '20px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: 30,
          }}
        >
          <div>
            <Typography>Facebook: </Typography>
            <Input size="middle" name="facebookLink" onChange={onChange} placeholder="facebook.com" />
          </div>
        </div>
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="primary">Update</Button>
        </div>{' '}
      </Card>
      <Card title="Images" style={{ margin: '20px 0' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: 30,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>About Us Section Image: </Typography>
            <img
              src="https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png"
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            <input onChange={onUpload} type="file" accept="image/*" name="aboutImage3File" />
            {/* <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </input> */}
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>Health Solution Section Image: </Typography>
            <img
              src="https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png"
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>Help Form Image: </Typography>
            <img
              src="https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png"
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>
        </div>
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="primary">Update</Button>
        </div>
      </Card>
    </>
  );
};

export default ContentManagement;
