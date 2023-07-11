import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { MapCard } from '@app/components/medical-dashboard/mapCard/MapCard';
import { ScreeningsCard } from '@app/components/medical-dashboard/screeningsCard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '@app/components/medical-dashboard/activityCard/ActivityCard';
import { TreatmentCard } from '@app/components/medical-dashboard/treatmentCard/TreatmentCard';
import { CovidCard } from '@app/components/medical-dashboard/covidCard/CovidCard';
import { HealthCard } from '@app/components/medical-dashboard/HealthCard/HealthCard';
import { FavoritesDoctorsCard } from '@app/components/medical-dashboard/favoriteDoctors/FavoriteDoctorsCard/FavoritesDoctorsCard';
import { PatientResultsCard } from '@app/components/medical-dashboard/PatientResultsCard/PatientResultsCard';
import { StatisticsCards } from '@app/components/medical-dashboard/statisticsCards/StatisticsCards';
import { BloodScreeningCard } from '@app/components/medical-dashboard/bloodScreeningCard/BloodScreeningCard/BloodScreeningCard';
import { NewsCard } from '@app/components/medical-dashboard/NewsCard/NewsCard';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPages/DashboardPage.styles';
import { getStats } from '@app/api/user';

const Dashboard: React.FC = () => {
  const { isTablet, isDesktop } = useResponsive();
  const [data, setData] = useState({
    all_users: 0,
    doctors: 0,
    paid_transac: 0,
    patients: 0,
    pend_transac: 0,
    psychiatrists: 0,
    psychologists: 0,
    relCounsellors: 0,
    transactions: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await getStats({});
      if (res.result == 'success') {
        setData({ ...res.data });
      }
      console.log({ res });
    };
    fetchData();
  }, []);
  const { t } = useTranslation();
  const flexCenter = { display: 'flex', flexDirection: 'column', justifyContent: 'center' };
  const desktopLayout = (
    <Row>
      <S.LeftSideCol>
        <Typography.Title level={1}>Users</Typography.Title>

        <Row gutter={[30, 30]}>
          <Row gutter={[30, 30]} className="cards" style={{ padding: '0 3rem', gap: '1rem' }}>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#36cfc9',
              }}
            >
              <Typography.Text>All</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data.all_users}</Typography.Text>
            </Card>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#f5222d',
              }}
            >
              <Typography.Text>Patients</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data.patients}</Typography.Text>
            </Card>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#ffbb96',
              }}
            >
              <Typography.Text>Doctors</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data.doctors}</Typography.Text>
            </Card>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#b37feb',
              }}
            >
              <Typography.Text>Psychiatrists</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data.psychiatrists}</Typography.Text>
            </Card>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#722ed1',
              }}
            >
              <Typography.Text>Psychologist</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data?.psychologists}</Typography.Text>
            </Card>
            <Card
              hoverable
              style={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#52c41a',
              }}
            >
              <Typography.Text>Relationship Counsellor</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>{data.relCounsellors}</Typography.Text>
            </Card>
          </Row>
          <Col>
            <Typography.Title level={1}>Transactions</Typography.Title>

            <Row gutter={[30, 30]} className="cards" style={{ padding: '0 3rem', gap: '1rem' }}>
              <Card
                hoverable
                style={{
                  width: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: '#1890ff',
                }}
              >
                <Typography.Text>All</Typography.Text>
                <Typography.Text style={{ fontSize: 30 }}>{data.paid_transac+data.pend_transac}</Typography.Text>
              </Card>
              <Card
                hoverable
                style={{
                  width: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: '#fa8c16',
                }}
              >
                <Typography.Text>Pending</Typography.Text>
                <Typography.Text style={{ fontSize: 30 }}>{data.pend_transac}</Typography.Text>
              </Card>
              <Card
                hoverable
                style={{
                  width: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundColor: '#8c8c8c',
                }}
              >
                <Typography.Text>Approaved</Typography.Text>
                <Typography.Text style={{ fontSize: 30 }}>{data.paid_transac}</Typography.Text>
              </Card>
            </Row>
          </Col>
          {/* <Col id="health" xl={24} xxl={24}>
            <HealthCard />
          </Col> */}

          {/* <Col id="favorite-doctors" xl={24}>
            <FavoritesDoctorsCard />
          </Col> */}
        </Row>
      </S.LeftSideCol>
    </Row>
  );

  const mobileAndTabletLayout = (
    <Row gutter={[20, 20]}>
      {/* <StatisticsCards /> */}

      <>
        <Typography.Title level={1}>Users</Typography.Title>

        <Row gutter={[30, 30]} style={{ padding: '0 3rem', gap: '1rem' }}>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>All</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>340</Typography.Text>
          </Card>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>Patients</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>200</Typography.Text>
          </Card>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>Doctors</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>79</Typography.Text>
          </Card>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>Psychiatrists</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>30</Typography.Text>
          </Card>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>Psychologist</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>20</Typography.Text>
          </Card>
          <Card hoverable style={{ width: 300 }}>
            <Typography.Text>Relationship Counsellor</Typography.Text>
            <Typography.Text style={{ fontSize: 30 }}>11</Typography.Text>
          </Card>
        </Row>
        <Col>
          <Typography.Title level={1}>Transactions</Typography.Title>

          <Row gutter={[30, 30]} style={{ padding: '0 3rem', gap: '1rem' }}>
            <Card hoverable style={{ width: 300 }}>
              <Typography.Text>All</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>200</Typography.Text>
            </Card>
            <Card hoverable style={{ width: 300 }}>
              <Typography.Text>Pending</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>80</Typography.Text>
            </Card>
            <Card hoverable style={{ width: 300 }}>
              <Typography.Text>Approaved</Typography.Text>
              <Typography.Text style={{ fontSize: 30 }}>100</Typography.Text>
            </Card>
          </Row>
        </Col>
      </>

      {/* <Col id="health" xs={24} md={24} order={(isTablet && 9) || 0}>
        <HealthCard />
      </Col> */}

      {/* <Col id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavoritesDoctorsCard />
      </Col> */}
    </Row>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default Dashboard;
