import { Col, Input, Typography, Row, Upload, Button, Card, Space, Modal } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';
import { contentManagement, getContent } from '@app/api/user';
const getBase64 = (file: RcFile | any): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

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
    about_us_image: '',
    signup_image: '',
    login_image: '',
    health_solution_images: '',
    help_form_image: '',
    contact_no: '',
    email: '',
    address: '',
    footer_bottom_text: '',
  });

  const [imagesPreview, setImagesPreview] = useState({
    about_us_image: '',
    health_solution_images: '',
    help_form_image: '',
    signup_image: '',
    login_image: '',
  });

  function getImageUrl(e: any) {
    const reader = new FileReader();

    reader.onload = () => {
      setImagesPreview((prev) => ({ ...prev, [e.target.name]: reader.result }));
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  const onChange = async (e: any) => {
    if (e.target.type === 'file') {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
      getImageUrl(e);
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    console.log({ data });
    const res = await contentManagement(data);
  };

  useEffect(() => {
    getContent().then((res) => {
      setData((prev: any) => ({
        ...prev,
        email: res?.data?.data?.email,
        address: res?.data?.data?.address,
        contact_no: res?.data?.data?.contact_no,
        footer_bottom_text: res?.data?.data?.footer_bottom_text,
      }));
      setImagesPreview((prev: any) => ({
        ...prev,
        about_us_image: res?.data?.data?.about_us_image,
        health_solution_images: res?.data?.data?.health_solution_images,
        help_form_image: res?.data?.data?.help_form_image,
      }));
    });
  }, []);
  return (
    <>
      {console.log('Image Prev: ', imagesPreview)}
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
            <Input size="middle" onChange={onChange} name="address" placeholder="abc street" value={data?.address} />
          </div>
          <div>
            <Typography>Email: </Typography>
            <Input size="middle" name="email" onChange={onChange} placeholder="abc@mail.com" value={data?.email} />
          </div>
          <div>
            <Typography>Phone Number: </Typography>
            <Input size="middle" name="contact_no" onChange={onChange} placeholder="+723467" value={data?.contact_no} />
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
              name="footer_bottom_text"
              value={data?.footer_bottom_text}
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
              src={
                imagesPreview?.about_us_image ||
                'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'
              }
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            <input onChange={onChange} type="file" accept="image/*" name="about_us_image" />
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
              src={
                imagesPreview?.health_solution_images ||
                'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'
              }
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            {/* <Upload name='health_solution_images'>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <input onChange={onChange} type="file" accept="image/*" name="health_solution_images" />
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
              src={
                imagesPreview?.help_form_image ||
                'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'
              }
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            {/* <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <input onChange={onChange} type="file" accept="image/*" name="help_form_image" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>Login Image: </Typography>
            <img
              src={
                imagesPreview?.login_image ||
                'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'
              }
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            {/* <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <input onChange={onChange} type="file" accept="image/*" name="login_image" />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>Signup Image: </Typography>
            <img
              src={
                imagesPreview?.signup_image ||
                'https://sickbridge-client.surge.sh/static/media/healthSolutions.03e9a7bfe0a64783b977.png'
              }
              alt=""
              style={{
                maxWidth: 375,
              }}
            />
            {/* <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <input onChange={onChange} type="file" accept="image/*" name="signup_image" />
          </div>
        </div>
        <div
          style={{
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="primary" onClick={() => handleSubmit()}>
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
