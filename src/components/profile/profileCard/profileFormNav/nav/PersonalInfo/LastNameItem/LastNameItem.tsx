import React from 'react';
import { Input } from '@app/components/common/inputs/Input/Input';
import { useTranslation } from 'react-i18next';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';

export const LastNameItem: React.FC<{ value?: string }> = ({ value }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="last_name" label={'last_name'}>
      <Input  isDisable={true}  value={value} />
    </BaseButtonsForm.Item>
  );
};
