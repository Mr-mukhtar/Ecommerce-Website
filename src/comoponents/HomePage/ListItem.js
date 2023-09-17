import React from 'react';
import { Container, Button } from 'react-bootstrap';

const tourData = [
  { date: 'JUL 16', location: 'DETROIT, MI', other: 'DTE ENERGY MUSIC THEATRE' },
  { date: 'JUL 18', location: 'CHICAGO, IL', other: 'UNITED CENTER' },
  { date: 'JUL 20', location: 'NEW YORK, NY', other: 'MADISON SQUARE GARDEN' },
  { date: 'JUL 22', location: 'LOS ANGELES, CA', other: 'STAPLES CENTER' },
  { date: 'JUL 25', location: 'SAN FRANCISCO, CA', other: 'CHASE CENTER' },
  { date: 'JUL 28', location: 'MIAMI, FL', other: 'AMERICAN AIRLINES ARENA' },
  { date: 'JUL 30', location: 'HOUSTON, TX', other: 'TOYOTA CENTER' },
];

const ListItem = ({ date, location, other }) => {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <span>{date}</span>
        <span className="m-2">{location}</span>
        <span>{other}</span>
        <Button variant="primary">BUY TICKETS</Button>
      </div>
      <hr className="my-4" style={{ borderTop: '1px solid black' }} />
    </Container>
  );
};

const TourList = () => {
  return (
    <Container>
      {tourData.map((item, index) => (
        <ListItem key={index} date={item.date} location={item.location} other={item.other} />
      ))}
    </Container>
  );
};

export default TourList;
