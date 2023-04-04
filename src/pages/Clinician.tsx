import { BasicTableRow } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Button, Col, Modal, Row, Space } from 'antd';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { ColumnsType } from 'antd/es/table';
// import { Option } from 'antd/lib/mentions';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { PersonalInfo } from '@app/components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';
// import * as S from './';
import { Input } from '@app/components/common/inputs/Input/Input';

const Clinician: FC = () => {
  const { t } = useTranslation();
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
      title: t('common.age'),
      dataIndex: 'age',
    },
    {
      title: t('Clinician Role'),
      dataIndex: 'clinicianRole',
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <Space>
            <Button type="primary" onClick={() => setIsBasicModalOpen(true)}>
              {t('details')}
            </Button>
          </Space>
        );
      },
    },
  ];
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
  return (
    <div>
      <Modal
        open={isBasicModalOpen}
        onOk={() => setIsBasicModalOpen(false)}
        onCancel={() => setIsBasicModalOpen(false)}
      >
        <PersonalInfo />
      </Modal>
      <PageTitle>{t('common.clinicians')}</PageTitle>
      <TablesWrapper>
        <Row style={{ marginBottom: '10px', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className='ant-collapse-header-text'>Name:</span>
            <Input />
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className='ant-collapse-header-text'>Email:</span>
            <Input />
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className='ant-collapse-header-text'>Role:</span>
            <Select defaultValue="doctor" width={160} allowClear>
              <Option value="doctor">Doctor</Option>
              <Option value="psychiatrist">Psychiatrist</Option>
              <Option value="psychologist">Psychologist</Option>
              <Option value="relationship counsellors">Relationship Counsellors</Option>
            </Select>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className='ant-collapse-header-text'>Status:</span>
            <Select defaultValue="active" width={160} allowClear>
              <Option value="active">Active</Option>
              <Option value="block">Block</Option>
              <Option value="unapproaved">Unapproaved</Option>
            </Select>
          </div>
          <Button>Apply</Button>
        </Row>
        <Card id="basic-table" $autoHeight title={t('Patients')} $padding="1.25rem 1.25rem 0">
          <BasicTable
            columns={columns}
            data={[
              {
                address: 'street 1 block A ,London',
                age: 20,
                name: 'usama',
                email: 'textuser@gmail.com',
                // tags: [{ priority: 1, value: 'low' },{ priority: 2, value: 'low' }],
                key: 1,
                clinicianRole: 'doctor',
              },
              {
                address: 'street 1 block A ,London',
                age: 20,
                name: 'usama',
                //   tags: [],
                key: 2,
                email: 'textuser@gmail.com',
                clinicianRole: 'psychiatrist',
              },
            ]}
            loading={false}
            pagination={{ current: 1, pageSize: 10 }}
          />
        </Card>
      </TablesWrapper>
    </div>
  );
};

export default Clinician;
