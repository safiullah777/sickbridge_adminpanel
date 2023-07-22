import axios from 'axios';
import { httpApi } from './http.api';
import isEmpty from 'is-empty';
import { notificationController } from '@app/controllers/notificationController';

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
    const accessToken = localStorage.getItem('accessToken');
    console.log({ accessToken });
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/payment/create`,
      {
        [!clinician ? 'patientFee' : 'appCommission']: num,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log({res})
    return res.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};

export const contentManagement = async (data: any) => {
  const formData = new FormData();
  for (const key in data) {
    if (data.hasOwnProperty(key) && !isEmpty(data[key]) && data[key] !== 'undefined') {
      formData.append(key, data[key]);
    }
  }

  try {
    const config = { headers: { 'Content-type': 'multipart/form-data' } };
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/content/create`, formData, config);
    console.log({ res });
    if (res.status == 200) {
      notificationController.success({ message: 'data uploaded successfully' });
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getContent = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/content/`);

    return res;
  } catch (err) {
    console.log({ err });
  }
};
