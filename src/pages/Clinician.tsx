import { BasicTableRow } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Avatar, Button, Col, Modal, Row, Space } from 'antd';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { ColumnsType } from 'antd/es/table';
// import { Option } from 'antd/lib/mentions';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { PersonalInfo } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';
// import * as S from './';
import { Input } from '@app/components/common/inputs/Input/Input';
import { useMounted } from '@app/hooks/useMounted';
import { getAllUsers, getCommission, setCommissionApi } from '@app/api/user';
import { Table } from '@app/components/common/Table/Table';

const Clinician: FC = () => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState<any>({});
  const [searchData, setSearchData] = useState({
    keyword: '',
    role: '',
    status: 'active',
  });
  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
    },
    {
      title: t('common.email'),
      dataIndex: 'email',
    },
    {
      title: 'Consultation Fee($)',
      dataIndex: 'consultationFee',
    },
    {
      title: t('Clinician Role'),
      dataIndex: 'clinician_role',
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: '15%',
      render: (data) => {
        return (
          <Space>
            <Button
              onClick={() => {
                setIsBasicModalOpen(true);
                setModalInfo(data);
              }}
              type="primary"
            >
              details
            </Button>
          </Space>
        );
      },
    },
  ];
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isMounted } = useMounted();
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [Commission, setCommission] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const com = await getCommission({});
      console.log({ com });
      setCommission(com?.data?.appCommission || 0);
      const res = await getAllUsers({
        limit: 10,
        page: pageNo,
        role: 'clinician',
        subRole: searchData.role.length ? searchData.role : '',
        status: searchData.status,
        keyword: searchData.keyword,
      });
      console.log({ res });
      setTotalPages(res?.metaData?.numOfPages || 0);
      res?.data
        ? setPatients(
            res?.data.map((item: any) => ({ ...item, name: `${item?.first_name} ${item?.last_name}`, actions: item })),
          )
        : setPatients([]);
      setLoading(false);
    };
    fetchData();
  }, []);
  const fetch = useCallback(
    async (a) => {
      setLoading(true);
      setPageNo(a);

      // getBasicTableData(pagination).then((res) => {
      const res = await getAllUsers({
        limit: 10,
        page: a,
        role: 'clinician',
        subRole: searchData.role.length ? searchData.role : '',
        status: searchData.status,
        keyword: searchData.keyword,
      });
      if (isMounted.current) {
        res?.data
          ? setPatients(
              res?.data.map((item: any) => ({ ...item, name: `${item.first_name} ${item.last_name}`, actions: item })),
            )
          : setPatients([]);
        setTotalPages(res?.metaData?.numOfPages || 0);
        setLoading(false);
      }
      // });
    },
    [isMounted],
  );
  const onSearch = async () => {
    setLoading(true);
    setPageNo(1);
    console.log({ searchData });
    const res = await getAllUsers({
      limit: 10,
      page: pageNo,
      role: 'clinician',
      subRole: searchData.role.length ? searchData.role : '',
      status: searchData.status,
      keyword: searchData.keyword,
    });
    console.log({ res });
    res?.data
      ? setPatients(
          res?.data.map((item: any) => ({ ...item, name: `${item.first_name} ${item.last_name}`, actions: item })),
        )
      : setPatients([]);
    setTotalPages(res?.metaData?.numOfPages || 0);
    setLoading(false);
  };
  return (
    <div>
      <Modal
        open={isBasicModalOpen}
        onOk={() => setIsBasicModalOpen(false)}
        onCancel={() => setIsBasicModalOpen(false)}
      >
        {/* <PersonalInfo user={modalInfo} /> */}
        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Avatar src={modalInfo?.clientImg} style={{ width: 100, height: 100 }} />
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>First Name :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.first_name}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Last Name :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.last_name}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Email :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.email}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Sex :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.sex}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Birthday :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.birthday}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Phone No :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.phone_number}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Address :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.address}</span>
          </div>
          <div className="" style={{ display: 'flex', gap: 10 }}>
            <span style={{ fontWeight: 'bold' }}>Post Code :</span>
            <span style={{ color: 'gray' }}>{modalInfo?.postcode}</span>
          </div>
        </div>
      </Modal>
      <Col style={{ gap: '10px' }}>
        <span style={{ color: '#000', fontSize: 20, fontWeight: 700 }}>Sickbridge Commission(%):</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: 20 }}>
          <Input
            value={Commission}
            onChange={(e) => setCommission(Number(e.target.value))}
            type="number"
            style={{ width: '300px' }}
          />
          <Button onClick={async () => await setCommissionApi({ clinician: true, num: Commission })}>Apply</Button>
        </div>
      </Col>
      <PageTitle>{t('Clinicians')}</PageTitle>
      <TablesWrapper>
        <Row style={{ marginBottom: '10px', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Input
              value={searchData.keyword}
              placeholder="search by name or email"
              onChange={(e) => setSearchData((prev) => ({ ...prev, keyword: e.target.value }))}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Role:</span>
            <Select
              defaultValue="doctor"
              width={160}
              value={searchData.role}
              onChange={(e) => {
                console.log(e);
                setSearchData((prev) => ({ ...prev, role: '' + e }));
              }}
            >
              <Option value="">{''}</Option>
              <Option value="doctor">Doctor</Option>
              <Option value="psychiatrist">Psychiatrist</Option>
              <Option value="psychologist">Psychologist</Option>
              <Option value="relationship counsellors">Relationship Counsellors</Option>
            </Select>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Status:</span>
            <Select
              defaultValue="active"
              width={160}
              value={searchData.status}
              onChange={(e) => setSearchData((prev) => ({ ...prev, status: '' + e }))}
            >
              <Option value="active">Active</Option>
              <Option value="block">Block</Option>
              <Option value="unapproaved">Unapproaved</Option>
            </Select>
          </div>
          <Button onClick={onSearch}>Apply</Button>
        </Row>
        <Card id="basic-table" $autoHeight title={t('Patients')} $padding="1.25rem 1.25rem 0">
          <Table
            columns={columns}
            dataSource={patients}
            pagination={{
              current: pageNo,
              pageSize: 10,
              onChange: (page: any) => {
                fetch(page);
              },
              total: totalPages,
            }}
            loading={loading}
            scroll={{ x: 800 }}
            bordered
          />
        </Card>
      </TablesWrapper>
    </div>
  );
};

export default Clinician;
