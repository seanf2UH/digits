import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title> {contact.firstName} {contact.lastName} </Card.Title>
      <Card.Subtitle> {contact.address} </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text> {contact.description} </Card.Text>
      {/* eslint-disable-next-line react/prop-types */}
      <Link to={`/edit/${contact._id}`}>Edit</Link>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Contact;
