import { Col, Input, Typography, Row, Upload, Button, Card, Space, Modal } from 'antd';
import { DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';
import {
  contentManagement,
  editService,
  editTestimonial,
  createTestimonial,
  deleteCard,
  getContent,
} from '@app/api/user';
import { notificationController } from '@app/controllers/notificationController';

const ContentManagement = () => {
  const [showModal, setShowModal] = useState({ service: false, testimonial: false });
  const [services, setServices] = useState<{ title: string; description: string; image: string; _id: string }[]>([]);
  const [testimonials, setTestimonials] = useState<
    { designation: string; testimonial: string; image: string; _id: string; author: string }[]
  >([]);

  const fieldsObject: any = {
    hero_title: 'Hero Title',
    hero_heading: 'Hero Heading',
    hero_description: 'Hero Description',
    hero_heading1: 'Hero Heading1',
    hero_decription1: 'Hero Description1',
    hero_question: 'Hero Question',
    start_section_heading: 'Start Section Heading',
    start_section_description: 'Start Section Description',
    start_section_for_clinician_description: 'Start Section For Clinician Description',
    start_section_for_patient_description: 'Start Section For Patient Description',
    about_us_description: 'About Us Description',
    clinician_signup_description: 'Clinician Signup Description',
    clinician_login_description: 'Clinician Login Description',
    health_solution_heading: 'Health Solution Heading',
    health_solution_text1: 'Health Solution Text1',
    health_solution_text2: 'Health Solution Text2',
    health_solution_text3: 'Health Solution Text3',
    help_form_heading: 'Help Form Heading',
    help_form_agree_text: 'Help Form Agree Text',
    help_form_contact_us_text: 'Help Form Contact Us Text',
    service_heading: 'Service Heading',
  };

  const [data, setData] = useState<any>({
    about_us_image: '',
    signup_image: '',
    login_image: '',
    health_solution_images: '',
    help_form_image: '',
    contact_no: '',
    email: '',
    address: '',
    footer_bottom_text: '',

    //new fields
    hero_title: '',
    hero_heading: '',
    hero_description: '',
    hero_heading1: '',
    hero_description1: '',
    hero_question: '',
    start_section_heading: '',
    start_section_description: '',
    start_section_for_clinician_description: '',
    start_section_for_patient_description: '',
    about_us_description: '',
    clinician_signup_description: '',
    clinician_login_description: '',
    health_solution_heading: '',
    health_solution_text1: '',
    health_solution_text2: '',
    health_solution_text3: '',
    help_form_heading: '',
    help_form_agree_text: '',
    help_form_contact_us_text: '',
  });

  const [imagesPreview, setImagesPreview] = useState({
    about_us_image: '',
    health_solution_images: '',
    help_form_image: '',
    signup_image: '',
    login_image: '',
    modal_image: '',
  });
  const [testimonialData, setTestimonialData] = useState({
    id: '',
    testimonial: '',
    card_image: '',
    author: '',
    designation: '',
  });
  const [serviceData, setServiceData] = useState({
    id: '',
    title: '',
    description: '',
    card_image: '',
  });

  const [modalLoading, setModalLoading] = useState({ edit: false, loading: false });

  function getImageUrl(e: any) {
    const reader = new FileReader();

    reader.onload = () => {
      setImagesPreview((prev) => ({ ...prev, [e.target.name]: reader.result }));
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  function getImageUrl1(e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<any>>) {
    const file = e.target.files?.[0];
    if (!file) {
      // Handle the case when no file is selected
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagesPreview((prev: any) => ({ ...prev, modal_image: reader.result }));
    };
    reader.onerror = () => {
      // Handle the error here if the reading fails
      console.error('Error reading the file.');
    };

    reader.readAsDataURL(file);
  }

  const onChange = async (e: any) => {
    if (e.target.type === 'file') {
      setData((prev: any) => ({ ...prev, [e.target.name]: e.target.files[0] }));
      getImageUrl(e);
    } else {
      setData((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const onChange1 = async (e: any, { type }: { type: 'service' | 'testimonial' }) => {
    if (e.target.type === 'file') {
      getImageUrl1(e, type === 'service' ? setServiceData : setTestimonialData);
      type === 'service'
        ? setServiceData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }))
        : setTestimonialData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      type === 'service'
        ? setServiceData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        : setTestimonialData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = async () => {
    const res = await contentManagement(data);
  };

  useEffect(() => {
    getContent().then((res) => {
      setData((prev: any) => ({
        ...prev,
        email: res?.data?.data?.content?.email,
        address: res?.data?.data?.content?.address,
        contact_no: res?.data?.data?.content?.contact_no,
        footer_bottom_text: res?.data?.data?.content?.footer_bottom_text,
        hero_title: res?.data?.data?.content?.hero_title || '',
        hero_heading: res?.data?.data?.content?.hero_heading || '',
        hero_description: res?.data?.data?.content?.hero_description || '',
        hero_heading1: res?.data?.data?.content?.hero_heading1 || '',
        hero_decription1: res?.data?.data?.content?.hero_decription1 || '',
        hero_question: res?.data?.data?.content?.hero_question || '',
        start_section_heading: res?.data?.data?.content?.start_section_heading || '',
        start_section_description: res?.data?.data?.content?.start_section_description || '',
        start_section_for_clinician_description:
          res?.data?.data?.content?.start_section_for_clinician_description || '',
        start_section_for_patient_description: res?.data?.data?.content?.start_section_for_patient_description || '',
        about_us_description: res?.data?.data?.content?.about_us_description || '',
        clinician_signup_description: res?.data?.data?.content?.clinician_signup_description || '',
        clinician_login_description: res?.data?.data?.content?.clinician_login_description || '',
        health_solution_heading: res?.data?.data?.content?.health_solution_heading || '',
        health_solution_text1: res?.data?.data?.content?.health_solution_text1 || '',
        health_solution_text2: res?.data?.data?.content?.health_solution_text2 || '',
        health_solution_text3: res?.data?.data?.content?.health_solution_text3 || '',
        help_form_heading: res?.data?.data?.content?.help_form_heading || '',
        help_form_agree_text: res?.data?.data?.content?.help_form_agree_text || '',
        help_form_contact_us_text: res?.data?.data?.content?.help_form_contact_us_text || '',
      }));
      setImagesPreview((prev: any) => ({
        ...prev,
        about_us_image: res?.data?.data?.content?.about_us_image,
        health_solution_images: res?.data?.data?.content?.health_solution_images,
        help_form_image: res?.data?.data?.content?.help_form_image,
        signup_image: res?.data?.data?.content?.signup_image,
        login_image: res?.data?.data?.content?.login_image,
      }));
      setServices(res?.data?.data?.contentServices || []);
      setTestimonials(res?.data?.data?.contentTestimonials || []);
    });
  }, []);
  const serviceRef = useRef<HTMLInputElement>(null);
  const testimonialRef = useRef<HTMLInputElement>(null);
  const deleted = async (id: string, service: boolean) => {
    setModalLoading({ edit: modalLoading.edit, loading: true });
    const res = await deleteCard({ id, service });
    setModalLoading({ edit: modalLoading.edit, loading: false });
    if (res && service) {
      setServices((prev) => prev.filter((item) => item._id !== id));
      setShowModal((prev) => ({ ...prev, service: false }));
      return;
    }
    if (res && !service) {
      setTestimonials((prev) => prev.filter((item) => item._id !== id));
      setShowModal((prev) => ({ ...prev, testimonial: false }));
      return;
    }
  };
  const create = async ({ type }: { type: 'service' | 'testimonial' }) => {
    const data: any = {};
    if (type === 'service') {
      if (!serviceData.title || !serviceData.description || !serviceData.card_image) {
        notificationController.error({ message: 'please fill all the fields' });
        return;
      }
      data.title = serviceData.title;
      data.description = serviceData.description;
      data.card_image = serviceData.card_image;
    } else {
      if (
        !testimonialData.designation ||
        !testimonialData.testimonial ||
        !testimonialData.author ||
        !testimonialData.card_image
      ) {
        notificationController.error({ message: 'please fill all the fields' });
        return;
      }
      data.testimonial = testimonialData.testimonial;
      data.author = testimonialData.author;
      data.designation = testimonialData.designation;
      data.card_image = testimonialData.card_image;
    }
    setModalLoading({ edit: modalLoading.edit, loading: true });
    const res = type == 'service' ? await editTestimonial({ ...data }) : await createTestimonial({ ...data });
    if (type == 'service') {
      setServiceData({ card_image: '', description: '', title: '', id: '' });
      setShowModal((prev) => ({ ...prev, service: false }));
      setServices((prev) => [...prev, res?.data?.data]);
    } else {
      setTestimonialData({ author: '', designation: '', testimonial: '', card_image: '', id: '' });
      setShowModal((prev) => ({ ...prev, testimonial: false }));
      setTestimonials((prev) => [...prev, res?.data?.data]);
    }
    if (serviceRef.current && serviceRef.current.value) {
      serviceRef.current.value = '';
    }
    if (testimonialRef.current && testimonialRef.current.value) {
      testimonialRef.current.value = '';
    }
    setImagesPreview((prev) => ({ ...prev, modal_image: '' }));
    setModalLoading({ edit: modalLoading.edit, loading: false });
  };

  const update = async ({ type }: { type: 'service' | 'testimonial' }) => {
    const data: any = {};
    if (type === 'service') {
      if (!serviceData.title || !serviceData.description) {
        notificationController.error({ message: 'please fill all the fields' });
        return;
      }
      data.title = serviceData.title;
      data.description = serviceData.description;
      data.card_image = serviceData.card_image;
    } else {
      if (!testimonialData.designation || !testimonialData.testimonial || !testimonialData.author) {
        notificationController.error({ message: 'please fill all the fields' });
        return;
      }
      data.testimonial = testimonialData.testimonial;
      data.author = testimonialData.author;
      data.designation = testimonialData.designation;
      data.card_image = testimonialData.card_image;
    }
    setModalLoading({ edit: modalLoading.edit, loading: true });
    const res =
      type == 'service'
        ? await editService({ ...data }, serviceData.id)
        : await editTestimonial({ ...data }, testimonialData.id);
    if (type == 'service') {
      setServiceData({ card_image: '', description: '', title: '', id: '' });
      setShowModal((prev) => ({ ...prev, service: false }));
      setServices((prev) => [...prev.map((item) => (item._id == serviceData.id ? res?.data?.data || item : item))]);
    } else {
      setTestimonialData({ author: '', designation: '', testimonial: '', card_image: '', id: '' });
      setShowModal((prev) => ({ ...prev, testimonial: false }));
      setTestimonials((prev) => [...prev.map((item) => (item._id == testimonialData.id ? res?.data?.data : item))]);
    }
    if (serviceRef.current && serviceRef.current.value) {
      serviceRef.current.value = '';
    }
    if (testimonialRef.current && testimonialRef.current.value) {
      testimonialRef.current.value = '';
    }
    setImagesPreview((prev) => ({ ...prev, modal_image: '' }));
    setModalLoading({ edit: modalLoading.edit, loading: false });
  };

  return (
    <>
      <Modal
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span>Service</span>
            {modalLoading.edit && (
              <Button
                disabled={modalLoading.loading}
                onClick={() => deleted(serviceData?.id, true)}
                type="ghost"
                style={{ marginRight: '20px' }}
              >
                <DeleteOutlined />
              </Button>
            )}
          </div>
        }
        confirmLoading={modalLoading.loading}
        open={showModal.service}
        onOk={async () => {
          if (modalLoading.edit) {
            await update({ type: 'service' });
          } else {
            await create({ type: 'service' });
          }
          if (serviceRef.current && serviceRef.current.value) {
            serviceRef.current.value = '';
          }
        }}
        onCancel={() => {
          setShowModal((prev) => ({ ...prev, service: false }));
          if (serviceRef.current && serviceRef.current.value) {
            serviceRef.current.value = '';
          }
        }}
      >
        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Typography>Title: </Typography>
            <Input
              size="middle"
              name="title"
              onChange={(e) => onChange1(e, { type: 'service' })}
              placeholder="serice title..."
              value={serviceData.title}
              required
            />
          </div>
          <div>
            <Typography>Description: </Typography>
            <Input
              size="middle"
              name="description"
              onChange={(e) => onChange1(e, { type: 'service' })}
              placeholder="serive description"
              value={serviceData?.description}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>About Us Section Image: </Typography>
            {imagesPreview.modal_image ? (
              <img
                src={imagesPreview?.modal_image}
                alt=""
                style={{
                  maxWidth: 375,
                }}
              />
            ) : (
              <></>
            )}
            <input
              ref={serviceRef}
              onChange={(e) => onChange1(e, { type: 'service' })}
              type="file"
              accept="image/*"
              name="card_image"
            />
          </div>
        </div>
      </Modal>

      <Modal
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span>Testimonial</span>
            {modalLoading.edit && (
              <Button
                disabled={modalLoading.loading}
                onClick={() => deleted(testimonialData.id, false)}
                type="ghost"
                style={{ marginRight: '20px' }}
              >
                <DeleteOutlined />
              </Button>
            )}
          </div>
        }
        confirmLoading={modalLoading.loading}
        open={showModal.testimonial}
        onOk={async () => {
          if (modalLoading.edit) {
            await update({ type: 'testimonial' });
          } else {
            await create({ type: 'testimonial' });
          }
          if (testimonialRef.current && testimonialRef.current.value) {
            testimonialRef.current.value = '';
          }
        }}
        onCancel={() => {
          setShowModal((prev) => ({ ...prev, testimonial: false }));
          if (testimonialRef.current && testimonialRef.current.value) {
            testimonialRef.current.value = '';
          }
        }}
      >
        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Typography>Testimonial Text: </Typography>
            <Input
              size="middle"
              name="testimonial"
              onChange={(e) => onChange1(e, { type: 'testimonial' })}
              // placeholder="serice title..."
              value={testimonialData.testimonial}
            />
          </div>
          <div>
            <Typography>author: </Typography>
            <Input
              size="middle"
              name="author"
              onChange={(e) => onChange1(e, { type: 'testimonial' })}
              // placeholder="serive description"
              value={testimonialData.author}
            />
          </div>
          <div>
            <Typography>designation: </Typography>
            <Input
              size="middle"
              name="designation"
              onChange={(e) => onChange1(e, { type: 'testimonial' })}
              // placeholder="serive description"
              value={testimonialData.designation}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Typography>Testimonial Image: </Typography>
            {imagesPreview.modal_image ? (
              <img
                src={imagesPreview.modal_image}
                alt=""
                style={{
                  maxWidth: 375,
                }}
              />
            ) : (
              <></>
            )}
            <input
              ref={testimonialRef}
              onChange={(e) => onChange1(e, { type: 'testimonial' })}
              type="file"
              accept="image/*"
              name="card_image"
            />
          </div>
        </div>
      </Modal>

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
          {Object.keys(fieldsObject).map((item: string, index: number) => (
            <div key={index}>
              <Typography>{fieldsObject[item]}: </Typography>
              <Input
                size="middle"
                name={item}
                onChange={onChange}
                // placeholder="+723467"
                value={data[item]}
              />
            </div>
          ))}
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
      <Card title="Testimonials" style={{ marginBottom: '30px' }}>
        <Row gutter={[30, 30]} style={{ width: '100%', marginBottom: '20px' }}>
          {testimonials.map((item) => (
            <Col
              key={item._id}
              xl={6}
              lg={8}
              md={12}
              sm={12}
              onClick={() => {
                setTestimonialData({
                  id: item._id,
                  designation: item.designation,
                  author: item.author,
                  testimonial: item.testimonial,
                  card_image: item.image,
                });
                setModalLoading({ edit: true, loading: modalLoading.loading });
                setShowModal((prev) => ({ ...prev, testimonial: true }));
                setImagesPreview((prev) => ({ ...prev, modal_image: item.image }));
              }}
            >
              <Card>
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    gap: '10px',
                    flexDirection: 'column',
                    maxWidth: '400px',
                    width: '100%',
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <img src={item.image || ''} style={{ width: '100%', objectFit: 'cover' }} alt="" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <p style={{ lineHeight: '100%' }}>{item.testimonial}</p>
                    <p style={{ lineHeight: '100%' }}>{item.author}</p>
                    <p style={{ lineHeight: '100%' }}>{item.designation}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Button
          onClick={() => {
            setTestimonialData({ card_image: '', author: '', designation: '', testimonial: '', id: '' });
            setImagesPreview((prev) => ({ ...prev, modal_image: '' }));
            setShowModal((prev) => ({ ...prev, testimonial: true }));
          }}
          type="primary"
          title="Add Testimonial"
          icon={<UploadOutlined />}
        >
          Add Testimonial
        </Button>
      </Card>
      <Card title="Services">
        <Row gutter={[30, 30]} style={{ width: '100%', marginBottom: '20px' }}>
          {services.map((item) => (
            <Col
              key={item._id}
              xl={6}
              lg={8}
              md={12}
              sm={12}
              onClick={() => {
                setServiceData({
                  id: item._id,
                  description: item.description,
                  title: item.title,
                  card_image: item.image,
                });
                setModalLoading({ edit: true, loading: modalLoading.loading });
                setShowModal((prev) => ({ ...prev, service: true }));
                setImagesPreview((prev) => ({ ...prev, modal_image: item.image }));
              }}
            >
              <Card>
                <div
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '400px',
                    width: '100%',
                  }}
                >
                  <div style={{ width: '100%' }}>
                    <img src={item.image || ''} style={{ width: '100%', objectFit: 'cover' }} alt="" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <p style={{ lineHeight: '100%' }}>{item.title}</p>
                    <p style={{ lineHeight: '100%' }}>{item.description}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Button
          type="primary"
          onClick={() => {
            setServiceData({ card_image: '', description: '', title: '', id: '' });
            setImagesPreview((prev) => ({ ...prev, modal_image: '' }));
            setShowModal((prev) => ({ ...prev, service: true }));
          }}
          title="Add Service"
          icon={<UploadOutlined />}
        >
          Add Service
        </Button>
      </Card>
    </>
  );
};

// const CustomUpload = () => {
//   const [fileList, setFileList] = useState([]);
//   const [previewImage, setPreviewImage] = useState('');
//   const [previewVisible, setPreviewVisible] = useState(false);

//   const handleFileChange = (e: any) => {
//     const files = e.target.files;
//     const fileList: any = [];

//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       fileList.push(file);
//     }

//     setFileList(fileList);
//   };

//   const handlePreview = (file: any) => {
//     const reader: any = new FileReader();

//     reader.onloadend = () => {
//       setPreviewImage(reader.result);
//       setPreviewVisible(true);
//     };

//     reader.readAsDataURL(file);
//   };

//   const handleCancelPreview = () => {
//     setPreviewVisible(false);
//   };

//   return (
//     <>
//       <input type="file" multiple onChange={handleFileChange} />

//       {fileList.length > 0 && (
//         <div>
//           {fileList.map((file: any) => (
//             <div key={file?.name}>
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt={file.name}
//                 style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                 onClick={() => handlePreview(file)}
//               />
//               <p>{file.name}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {previewVisible && (
//         <div>
//           <img src={previewImage} alt="Preview" style={{ width: '100%' }} />
//           <button onClick={handleCancelPreview}>Close Preview</button>
//         </div>
//       )}
//     </>
//   );
// };

export default ContentManagement;
