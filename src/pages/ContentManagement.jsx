import { Col, Input, Typography, Row } from 'antd';
import * as S from '@app/pages/uiComponentsPages//UIComponentsPage.styles';

const ContentManagement = () => {
  return (
    <>
      <S.Card>
        <Typography>Wesite Information</Typography>
        <Row>
          <Col >
            <S.InputsWrapper>
              <Input size="middle" placeholder="Address" />
            </S.InputsWrapper>
          </Col>
          <Col>
            <S.InputsWrapper>
              <Input size="middle" placeholder="Email" />
            </S.InputsWrapper>
          </Col>
        </Row>
      </S.Card>
      <S.Card>
        <Typography>Social Media Links</Typography>
        <Row>
          <Col>
            <S.InputsWrapper>
              <Input size="middle" placeholder="Facebook" />
            </S.InputsWrapper>
          </Col>
          <Col>
            <S.InputsWrapper>
              <Input size="middle" placeholder="Email" />
            </S.InputsWrapper>
          </Col>
        </Row>
      </S.Card>
    </>
  );
};

export default ContentManagement;
