import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Message from '../components/utils/Message';
import CardHistory from '../components/Cardhistory/Cardhistory';
import { Helmet } from 'react-helmet';

const History = () => {
  const history = useSelector((state) => state.weatherHistory);

  const { historyItems } = history;

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title> History | Weather App</title>
      </Helmet>
      <Container className='py-4' fluid>
        <h4>Búsquedas Recientes</h4>
        <Row>
          {historyItems.length === 0 ? (
            <Message>
              No hay elementos por ahora oprima <Link to='/'>volver</Link> para realizar una busqueda
            </Message>
          ) : (
            <>
              {historyItems.map((element) => {
                return (
                  <>
                    <Col md={3} xl={3} className='my-2'>
                      <CardHistory name={element.name} icon={element.icon} temp={element.temp} />
                    </Col>
                  </>
                );
              })}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default History;
