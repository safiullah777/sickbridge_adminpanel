import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@app/components/common/inputs/Input/Input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const FirstNameItem: React.FC<{ value?: string }> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="first_name" label={t('common.firstName')}>
      <Input isDisable={true} value={value} />
    </BaseButtonsForm.Item>
  );
};
