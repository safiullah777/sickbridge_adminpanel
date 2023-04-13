import React, { useEffect, useState, useCallback } from 'react';
import { Col, Row, Space, TablePaginationConfig } from 'antd';
import { BasicTableRow, getBasicTableData, Pagination, Tag } from 'api/table.api';
import { Table } from 'components/common/Table/Table';
import { ColumnsType } from 'antd/es/table';
import { Button } from 'components/common/buttons/Button/Button';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from 'controllers/notificationController';
import { Status } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Status/Status';
import { useMounted } from '@app/hooks/useMounted';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 10,
};

export const BasicTable = ({
  data,
  pagination,
  loading,
  columns,
  handleTableChange
}: {
  data: any[];
  pagination: Pagination;
  loading: boolean;
  columns:ColumnsType<any>
  handleTableChange?:()=>void
}) => {
  
  const { t } = useTranslation();
  const { isMounted } = useMounted();
  // {
  //   title: t('common.tags'),
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (tags: Tag[]) => (
  //     <Row gutter={[10, 10]}>
  //       {tags.map((tag: Tag) => {
  //         return (
  //           <Col key={tag.value}>
  //             <Status color={defineColorByPriority(tag.priority)} text={tag.value.toUpperCase()} />
  //           </Col>
  //         );
  //       })}
  //     </Row>
  //   ),
  // },
  // const fetch = useCallback(
  //   (pagination: Pagination) => {
  //     setTableData((tableData) => ({ ...tableData, loading: true }));
  //     getBasicTableData(pagination).then((res) => {
  //       if (isMounted.current) {
  //         setTableData({ data: res.data, pagination: res.pagination, loading: false });
  //       }
  //     });
  //   },
  //   [isMounted],
  // );

  // useEffect(() => {
  //   fetch(initialPagination);
  // }, [fetch]);

  // const handleTableChange = (pagination: TablePaginationConfig) => {
  //   // fetch(pagination);
  // };

  // const handleDeleteRow = (rowId: number) => {
  //   setTableData({
  //     ...tableData,
  //     data: tableData.data.filter((item) => item.key !== rowId),
  //     pagination: {
  //       ...tableData.pagination,
  //       total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
  //     },
  //   });
  // };

  
     
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
      bordered
    />
  );
};
