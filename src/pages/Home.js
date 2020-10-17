import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Searcbar from '../components/Searchbar/Searchbar';
import Loader from '../components/utils/Loader';
import Message from '../components/utils/Message';
import Heroweather from '../components/Heroweather/Heroweather';
import Lastweather from '../components/Lastweather/Lastweather';
import { Helmet } from 'react-helmet';

const Home = () => {
  const dailyweather = useSelector((state) => state.weather);
  const { loading, error, weatherInfo } = dailyweather;
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{weatherInfo ? `${weatherInfo.name} | ` : ''}Weather App</title>
      </Helmet>
      <Container className='py-4' fluid>
        <Row>
          <Col md={12}>
            <Searcbar />
          </Col>
          {loading ? (
            <Loader />
          ) : error ? (
            <Col className='d-flex justify-content-center my-2' md={12}>
              <Message variant='danger' style={{ width: '100%' }}>
                {error}
              </Message>
            </Col>
          ) : (
            <>
              <Col className='d-flex justify-content-center' md={12}>
                <Heroweather weatherInfo={weatherInfo} />
              </Col>
              <Col md={12} className='d-flex justify-content-center'>
                <Lastweather lat={weatherInfo ? weatherInfo.coord.lat : ''} lon={weatherInfo ? weatherInfo.coord.lon : ''} />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
