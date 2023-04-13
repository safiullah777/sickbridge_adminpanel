import axios from 'axios';
import { httpApi } from './http.api';

export const getAllUsers = async ({
  role,
  subRole,
  page,
  limit,
}: {
  role: string;
  subRole: string;
  page: number;
  limit: number;
}) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/user/getAllUsers?role=${role}&subRole=${subRole}&page=${page}&limit=${limit}`,
    );
    return res.data;
  } catch (err) {
    console.log({ err });
  }
};

export const contentManagement = async ({
  address,
  aboutImage3File,
  healthImage1File,
  healthImage2File,
  healthImage3File,
  helpImage1File,
  helpImage2File,
  helpImage3File,
  email,
  phone,
  aboutUs,
  footerBottomText,
  facebookLink,
}: {
  address: string;
  aboutImage3File: string;
  healthImage1File: string;
  healthImage2File: string;
  healthImage3File: string;
  helpImage1File: string;
  helpImage2File: string;
  helpImage3File: string;
  email: string;
  phone: string;
  aboutUs: string;
  footerBottomText: string;
  facebookLink: string;
}) => {
  const formData = new FormData();

  formData.append('address', address);
  formData.append('aboutImage3', aboutImage3File);
  formData.append('healthImage1', healthImage1File);
  formData.append('healthImage2', healthImage2File);
  formData.append('healthImage3', healthImage3File);
  formData.append('helpImage1', helpImage1File);
  formData.append('helpImage2', helpImage2File);
  formData.append('helpImage3', helpImage3File);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('aboutUs', aboutUs);
  formData.append('footerBottomText', footerBottomText);
  formData.append('facebookLink', facebookLink);
  try {
    const res = await axios.post(`http://localhost:4000/api/content/create`, formData);
    return res
  } catch (err) {
    console.log({ err });
  }
};
