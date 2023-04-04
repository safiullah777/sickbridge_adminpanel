import { BasicTableRow } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Button, Row, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
// import * as S from './';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { Input } from '@app/components/common/inputs/Input/Input';

const Patient: FC = () => {
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
            <Button
              //  onClick={() => handleDeleteRow(record.key)}
              type="primary"
            >
              {t('details')}
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <div>
      <PageTitle>{t('common.patients')}</PageTitle>
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
            <span className='ant-collapse-header-text'>Status:</span>
            <Select defaultValue="doctor" width={160} allowClear>
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
              },
              {
                address: 'street 1 block A ,London',
                age: 20,
                email: 'textuser@gmail.com',
                name: 'usama',
                //   tags: [],
                key: 2,
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

export default Patient;
