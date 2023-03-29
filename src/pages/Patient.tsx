import { Card } from '@app/components/common/Card/Card.styles';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { EditableTable } from '@app/components/tables/editableTable/EditableTable';
import { TablesWrapper } from '@app/components/tables/Tables/Tables.styles';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
// import * as S from './';

const Patient: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageTitle>{t('common.patients')}</PageTitle>
      <TablesWrapper>
        <Card id="basic-table" $autoHeight title={t('Patients')} $padding="1.25rem 1.25rem 0">
          <EditableTable />
        </Card>{' '}
      </TablesWrapper>
    </div>
  );
};

export default Patient;
