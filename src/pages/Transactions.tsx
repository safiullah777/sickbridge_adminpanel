import { BasicTableRow } from '@app/api/table.api';
import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BasicTable } from '@app/components/tables/BasicTable/BasicTable';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import { Button, Col, Divider, Row, Space, Table, Typography } from 'antd';
import { Select, Option } from '@app/components/common/selects/Select/Select';
import { ColumnsType } from 'antd/es/table';
// import { Option } from 'antd/lib/mentions';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Title from 'antd/lib/typography/Title';
import { EyeFilled, PrinterOutlined } from '@ant-design/icons';
// import * as S from './';
import { Modal, InfoModal, SuccessModal, WarningModal, ErrorModal } from '@app/components/common/Modal/Modal';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';
import { getAllTransactions } from '@app/api/user';
import { useMounted } from '@app/hooks/useMounted';
const Transaction: FC = () => {
  const { t } = useTranslation();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState<boolean>(false);
  const { isMounted } = useMounted();
  const [status, setStatus] = useState('all');
  const [modalData, setModalData] = useState<any>(null);
  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('date'),
      dataIndex: 'createdAt',
    },
    {
      title: t('Transaction Id'),
      dataIndex: '_id',
    },
    {
      title: t('From'),
      dataIndex: 'fromName',
    },
    {
      title: t('to'),
      dataIndex: 'toName',
    },
    {
      title: t('Amount $'),
      dataIndex: 'amount',
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
              onClick={() => {
                setIsBasicModalOpen(true);
                setModalData(record);
              }}
              //  onClick={() => handleDeleteRow(record.key)}
            >
              <EyeFilled />
            </Button>
            {/* <Button
              type="primary"
              onClick={() => setIsBasicModalOpen(true)}
              //  onClick={() => handleDeleteRow(record.key)}
            >
              <PrinterOutlined />
            </Button> */}
          </Space>
        );
      },
    },
  ];
  const [loading, setLoading] = useState(false);
  const [trans, setTrans] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const fetch = useCallback(
    async (a) => {
      console.log({ a });
      setLoading(true);
      setPageNo(a);
      // getBasicTableData(pagination).then((res) => {
      const res = await getAllTransactions({ pageNo: a, status });
      if (isMounted.current) {
        res?.data
          ? setTrans(
              res?.data.map((item: any, index: number) => ({
                ...item,
                fromName: item?.checkoutBy?.first_name + ' ' + item?.checkoutBy?.last_name,
                fromEmail: item?.checkoutBy?.email,
                toName: item?.checkoutTo?.first_name + ' ' + item?.checkoutTo?.last_name,
                toEmail: item?.checkoutTo?.email,
                amount: item?.amounts?.consultationTotalFee,
                createdAt: new Date(item?.createdAt).toLocaleDateString(),
              })),
            )
          : setTrans([]);
        setTotalPages(res?.metaData?.numOfPages || 0);
        setLoading(false);
      }
      // });
    },
    [isMounted],
  );
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getAllTransactions({ pageNo, status });
      res?.data
        ? setTrans(
            res?.data.map((item: any) => ({
              ...item,
              fromName: item?.checkoutBy?.first_name + ' ' + item?.checkoutBy?.last_name,
              fromEmail: item?.checkoutBy?.email,
              toName: item?.checkoutTo?.first_name + ' ' + item?.checkoutTo?.last_name,
              toEmail: item?.checkoutTo?.email,
              amount: item?.amounts?.consultationTotalFee,
              createdAt: new Date(item?.createdAt).toLocaleDateString(),
            })),
          )
        : setTrans([]);
      setTotalPages(res?.metaData?.numOfPages || 0);
      setLoading(false);
    };
    fetchData();
  }, []);

  const onSearch = async () => {
    setLoading(true);
    setPageNo(1);
    const res = await getAllTransactions({ pageNo, status });
    res?.data
      ? setTrans(
          res?.data.map((item: any, index: number) => ({
            ...item,
            fromName: item?.checkoutBy.first_name + ' ' + item?.checkoutBy.last_name,
            fromEmail: item?.checkoutBy.email,
            toName: item?.checkoutTo.first_name + ' ' + item?.checkoutTo.last_name,
            toEmail: item?.checkoutTo.email,
            amount: item.amounts.consultationTotalFee,
            createdAt: new Date(item?.createdAt).toLocaleDateString(),
          })),
        )
      : setTrans([]);
    setTotalPages(res?.metaData?.numOfPages);
    setLoading(false);
  };
  return (
    <div>
      <Modal
        open={isBasicModalOpen}
        onOk={() => setIsBasicModalOpen(false)}
        onCancel={() => setIsBasicModalOpen(false)}
      >
        {console.log({ modalData })}
        <Row gutter={[20, 20]}>
          <Divider>From:</Divider>
          <Col md={24}>
            <Col>
              <Space>
                <Typography.Text style={{ fontSize: 16 }}>Name:</Typography.Text>
                <Typography.Text type="secondary">
                  {modalData?.checkoutBy?.first_name + ' ' + modalData?.checkoutBy?.last_name}
                </Typography.Text>
              </Space>
            </Col>
            <Col>
              <Space>
                <Typography.Text style={{ fontSize: 16 }}>Email:</Typography.Text>
                <Typography.Text type="secondary">{modalData?.checkoutBy?.email}</Typography.Text>
              </Space>
            </Col>
          </Col>
          <Col span={24}>
            <Divider>To:</Divider>
            <Col md={24}>
              <Col>
                <Space>
                  <Typography.Text style={{ fontSize: 16 }}>Name:</Typography.Text>
                  <Typography.Text type="secondary">
                    {modalData?.checkoutTo?.first_name + ' ' + modalData?.checkoutTo?.last_name}
                  </Typography.Text>
                </Space>
              </Col>
              <Col>
                <Space>
                  <Typography.Text style={{ fontSize: 16 }}>Email:</Typography.Text>
                  <Typography.Text type="secondary">{modalData?.checkoutTo?.email}</Typography.Text>
                </Space>
              </Col>
            </Col>
          </Col>
        </Row>
        <Divider>Details:</Divider>
        <Col>
          <Space>
            <Typography.Text style={{ fontSize: 16 }}>Date of Transaction:</Typography.Text>
            <Typography.Text type="secondary">{modalData?.createdAt}</Typography.Text>
          </Space>
        </Col>
        <Col>
          <Space>
            <Typography.Text style={{ fontSize: 16 }}>Amount:</Typography.Text>
            <Typography.Text type="secondary">${modalData?.amount}</Typography.Text>
          </Space>
        </Col>
        {/* <p>Issued on: 12/01/2023</p> */}
      </Modal>

      <PageTitle>{t('transactions')}</PageTitle>
      <TablesWrapper>
        {/* <Row style={{ marginBottom: '10px', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="ant-collapse-header-text">Status:</span>
            <Select defaultValue="All" width={160} allowClear onChange={(e) => setStatus('' + e)}>
              <Option value="all">{'All'}</Option>
              <Option value="pending">Pending</Option>
              <Option value="paid">Paid</Option>
            </Select>
          </div>

          <Button onClick={onSearch}>Apply</Button>
        </Row> */}
        <Card id="basic-table" $autoHeight title={t('Transaction History')} $padding="1.25rem 1.25rem 0">
          {console.log({ totalPages })}
          <Table
            columns={columns}
            dataSource={trans}
            loading={loading}
            pagination={{
              current: pageNo,
              pageSize: 10,
              // onChange: (page) => setPageNo(page),
              onChange: (page) => {
                fetch(page);
              },
              total: totalPages * 10,
            }}
          />
        </Card>
      </TablesWrapper>
    </div>
  );
};

export default Transaction;
