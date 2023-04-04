import { BasicTableRow } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Button, Col, Row, Space } from 'antd';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { ColumnsType } from 'antd/es/table';
// import { Option } from 'antd/lib/mentions';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { EyeFilled, PrinterOutlined } from '@ant-design/icons';
// import * as S from './';
import { Modal, InfoModal, SuccessModal, WarningModal, ErrorModal } from '@app/components/common/Modal/Modal';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles'; 
const Transaction: FC = () => {
  const { t } = useTranslation();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('date'),
      dataIndex: 'date',
    },
    {
        title: t('Transaction ID'),
        dataIndex: 'transactionId',
      },
    {
        title: t('From'),
        dataIndex: 'from',
    },
    {
        title: t('to'),
        dataIndex: 'to',
    },
    {
      title: t('Amount $'),
      dataIndex: 'amount',
    },
    {
        title: t('Status'),
        dataIndex: 'status',
      },
    {
      title: t('Actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <Space>
            <Button
              type="primary"
              onClick={() => setIsBasicModalOpen(true)}
              //  onClick={() => handleDeleteRow(record.key)}
            >
              <EyeFilled />
            </Button>
            <Button
              type="primary"
              onClick={() => setIsBasicModalOpen(true)}
              //  onClick={() => handleDeleteRow(record.key)}
            >
              <PrinterOutlined />
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <div>
        
          <Modal

            open={isBasicModalOpen}
            onOk={() => setIsBasicModalOpen(false)}
            onCancel={() => setIsBasicModalOpen(false)}
          >
            <div style={{display:'flex',justifyContent:"space-between",marginTop:"1rem"}}>
                <p>John Doe</p>
                <div style={{display:'flex',gap:"1rem"}}>
                    <span>Status:</span>
                    <span>Approaved</span>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:"space-between",}}>
                <p>Invoice: #12312</p>
                <div style={{display:'flex',gap:"1rem"}}>
                    <span>$12,212</span>
                </div>
            </div>
            <p>Issued on: 12/01/2023</p>

          </Modal>
        
      <PageTitle>{t('transactions')}</PageTitle>
      <TablesWrapper>
          <Row style={{ marginBottom: '10px', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span  className='ant-collapse-header-text'>Role:</span>
              <Select defaultValue="Admin" width={160} allowClear>
                <Option value="Admin">Admin</Option>
                <Option value="Patient">Patient</Option>
                <Option value="Clinicians">Clinicians</Option>
              </Select>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className='ant-collapse-header-text'>Status:</span>
              <Select defaultValue="pending" width={160} allowClear>
                <Option value="active">Pending</Option>
                <Option value="block">Approaved</Option>
                {/* <Option value="unapproaved">Unapproaved</Option> */}
              </Select>
            </div>
           
            <Button>Apply</Button>
          </Row>
        <Card id="basic-table" $autoHeight title={t('Transaction History')} $padding="1.25rem 1.25rem 0">
          <BasicTable
            columns={columns}
            data={[
              {
                 date:'12-01-2023',
                 from:'clinician',
                 to:'admin',
                amount:'100',
                status:'pending',
                transactionId:'#3923892'
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

export default Transaction;
