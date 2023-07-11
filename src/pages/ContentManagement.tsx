import { Col, Input, Typography, Row, Upload, Button, Card, Space, Modal } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';
const getBase64 = (file: RcFile | any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export function getImageUrl(image: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(image);
  });
}
const ContentManagement = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [images, setImages] = useState({
    aboutUsImage: null,
  });
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    return file.url || (file.preview as string);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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
    console.log({ fileList });
    setData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const onUpload = (info: any) => {
    console.log(info.target.files[0]);
    setImages((prev) => ({ ...prev, aboutUsImage: info.target.files[0] }));
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
          {/* <div>
            <Typography>About US: </Typography>
            <Input.TextArea
              size="middle"
              name="aboutUs"
              onChange={onChange}
              placeholder="About Company"
            ></Input.TextArea>
          </div> */}
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
              src={'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'}
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
          <Button type="primary" onClick={() => console.log({ fileList })}>
            Update
          </Button>
        </div>
      </Card>
    </>
  );
};

const CustomUpload = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState('');
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    const fileList: any = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      fileList.push(file);
    }

    setFileList(fileList);
  };

  const handlePreview = (file: any) => {
    const reader: any = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setPreviewVisible(true);
    };

    reader.readAsDataURL(file);
  };

  const handleCancelPreview = () => {
    setPreviewVisible(false);
  };

  return (
    <>
      <input type="file" multiple onChange={handleFileChange} />

      {fileList.length > 0 && (
        <div>
          {fileList.map((file: any) => (
            <div key={file?.name}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                onClick={() => handlePreview(file)}
              />
              <p>{file.name}</p>
            </div>
          ))}
        </div>
      )}

      {previewVisible && (
        <div>
          <img src={previewImage} alt="Preview" style={{ width: '100%' }} />
          <button onClick={handleCancelPreview}>Close Preview</button>
        </div>
      )}
    </>
  );
};

export default ContentManagement;
