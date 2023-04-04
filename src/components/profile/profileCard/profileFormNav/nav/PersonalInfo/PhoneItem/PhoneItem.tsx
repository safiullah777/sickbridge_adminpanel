import React from 'react';
import { useTranslation } from 'react-i18next';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import * as S from './PhoneItem.styles';
import { Input } from '@app/components/common/inputs/Input/Input';

interface PhoneItemsProps {
  required?: boolean;
  onClick?: () => void;
  verified?: boolean;
}

export const PhoneItem: React.FC<PhoneItemsProps> = ({ required, onClick, verified }) => {
  const { t } = useTranslation();

  return (
    <BaseButtonsForm.Item name="phoneNo" label={t('Phone')}>
      <Input isDisable={true} />
    </BaseButtonsForm.Item>
  );
};
