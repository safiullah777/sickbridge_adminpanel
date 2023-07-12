import axios from 'axios';
import { httpApi } from './http.api';

export const loginApi = async ({ email, password }: { email: string; password: string }) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      email,
      password,
    });
    return res.data || [];
  } catch (err) {
    console.log({ err });
  }
};
export const getAllUsers = async ({
  role,
  subRole,
  page,
  limit,
  status,
  keyword = '',
}: {
  role: string;
  subRole: string;
  page: number;
  limit: number;
  status: string;
  keyword?: string;
}) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/getAllUsers?role=${role}&subRole=${subRole}&page=${page}&limit=${limit}&status=${status}&keyword=${keyword}`,
    );
    return res.data || [];
  } catch (err) {
    console.log({ err });
  }
};

export const getAllTransactions = async ({ pageNo, status }: { pageNo: number; status?: string | any }) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/checkouts/all?limit=10&page=${pageNo}${
        status.toLocaleLowerCase() !== 'all' ? `&status=${status}` : ''
      }`,
    );
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};

export const getCommission = async ({}) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/payment`);
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};
export const changeStatus = async ({
  status,
  userId,
  reason = '',
}: {
  status: string;
  userId: string;
  reason: string;
}) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user/status?status=${status}&userId=${userId}${
        reason.length ? `&reason=${reason}` : ''
      }`,
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getStats = async ({}) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/stats`);
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};

export const setCommissionApi = async ({ clinician, num }: { clinician: boolean; num: number }) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/payment/create`, {
      [!clinician ? 'patientFee' : 'appCommission']: num,
    });
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};

export const contentManagement = async (data: any) => {
  const formData = new FormData();
  const keys = Object.keys(data);
  keys.forEach((item, index) => {
    formData.append(item, data[item]);
  });

  // formData.append('address', address);
  // formData.append('email', email);
  // formData.append('contact_no', contact_no);
  // formData.append('about_us_image', about_us_image);
  // formData.append('signup_image', signup_image);
  // formData.append('login_image', login_image);
  // formData.append('health_solution_images', health_solution_images);
  // formData.append('help_form_image', help_form_image);
  // formData.append('footer_bottom_text', footer_bottom_text);
  try {
    const res = await axios.post(`http://localhost:4000/api/content/create`, formData);
    return res;
  } catch (err) {
    console.log({ err });
  }
};
