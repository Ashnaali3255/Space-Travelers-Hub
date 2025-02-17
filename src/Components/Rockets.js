import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketsSlice';
import RocketRender from './RocketRender';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, [dispatch, rockets.length]);

  return (
    <Container className="border-top" fluid>
      {rockets
        && rockets.map((rocket) => (
          <RocketRender key={rocket.id} rocket={rocket} />
        ))}
    </Container>
  );
};

export default Rockets;
