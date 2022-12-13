import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';



const InteractionList = ({interaction}) => {

    return (
      // <div>
      //   {interaction.description}
      // </div>
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>insert interaction description here</Accordion.Header>
        <Accordion.Body>
          insert reaction here
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default InteractionList;