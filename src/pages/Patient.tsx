import { BasicTableRow, Pagination } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Button, Modal, Row, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import * as S from './';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Input } from '@app/components/common/inputs/Input/Input';
import { getAllUsers } from '@app/api/user';
import { useMounted } from '@app/hooks/useMounted';
import { Table } from '@app/components/common/Table/Table';
import { PersonalInfo } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';

const Patient: FC = () => {
  const { t } = useTranslation();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isMounted } = useMounted();
  const [pageNo, setPageNo] = useState(1);
  const [totalPages,setTotalPages]=useState(0)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = (await getAllUsers({ limit: 10, page: pageNo, role: 'patient', subRole: '' }));
      console.log({ res });
      setTotalPages(res.metaData?.numOfPages)
      setPatients(res?.data.map((item: any) => ({ ...item, name: `${item.first_name} ${item.last_name}`, actions: item })));
      setLoading(false);
    };
    fetchData();
  }, []);
  const fetch = useCallback(
    async (a) => {
      console.log({ a });
      setLoading(true);
      setPageNo(a);
      // getBasicTableData(pagination).then((res) => {
      const res = (await getAllUsers({ limit: 10, page: a, role: 'patient', subRole: '' }));
      if (isMounted.current) {
        res?.data && setPatients(
          res?.data.map((item: any) => ({ ...item, name: `${item.first_name} ${item.last_name}`, actions: item })),
        );
        setLoading(false);
      }
      // });
    },
    [isMounted],
  );

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    
    {
      title: 'Address',
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
  const [modalInfo, setModalInfo] = useState<object>({});

  return (
    <div>
      <Modal
        open={isBasicModalOpen}
        onOk={() => setIsBasicModalOpen(false)}
        onCancel={() => setIsBasicModalOpen(false)}
      >
        <PersonalInfo user={modalInfo} />
      </Modal>
      <PageTitle>{t('common.patients')}</PageTitle>
      <TablesWrapper>
        <Row style={{ marginBottom: '10px', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Name:</span>
            <Input />
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Email:</span>
            <Input />
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Status:</span>
            <Select defaultValue="" width={160} allowClear>
              <Option value="active">Active</Option>
              <Option value="block">Block</Option>
              <Option value="unapproaved">Unapproaved</Option>
            </Select>
          </div>
          <Button>Apply</Button>
        </Row>
        <Card id="basic-table" $autoHeight title={t('Patients')} $padding="1.25rem 1.25rem 0">
          <Table
            columns={columns}
            dataSource={patients}
            pagination={{
              current: pageNo,
              pageSize: 10,

              // onChange: (page) => setPageNo(page),
              onChange: (page) => {
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

export default Patient;
