import React from 'react';
import * as S from './MainSider/MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import { useResponsive } from 'hooks/useResponsive';
import logo from 'assets/logo.svg';
import logoDark from 'assets/logo.svg';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  const theme = useAppSelector((state) => state.theme.theme);

  const img = theme === 'dark' ? logoDark : logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/" style={{ background: 'white' }}>
        <img src={img} alt="Lightence" style={{ width: '100%', padding: '0 1rem' }} />
        {/* <S.BrandSpan>Lightence</S.BrandSpan> */}
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
