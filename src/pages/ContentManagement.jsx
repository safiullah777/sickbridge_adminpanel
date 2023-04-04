import { Col, Input, Typography, Row, Upload, Button, Card, Space } from 'antd';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { UploadOutlined } from '@ant-design/icons';

const ContentManagement = () => {
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
            <Input size="middle" placeholder="abc street" />
          </div>
          <div>
            <Typography>Email: </Typography>
            <Input size="middle" placeholder="abc@mail.com" />
          </div>
          <div>
            <Typography>Phone Number: </Typography>
            <Input size="middle" placeholder="+723467" />
          </div>
          <div>
            <Typography>About US: </Typography>
            <Input.TextArea size="middle" placeholder="About Company"></Input.TextArea>
          </div>
          <div>
            <Typography>Footer Bottom Text: </Typography>
            <Input.TextArea size="middle" placeholder="Like: Copyright 2022 - All Rights Reserved"></Input.TextArea>
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
            <Input size="middle" placeholder="facebook.com" />
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
