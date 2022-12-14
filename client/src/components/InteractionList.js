import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const InteractionList = ({interaction}) => {
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          {interaction.description}
          </Accordion.Header>
          <Accordion.Body>
            {interaction.reaction}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default InteractionList;