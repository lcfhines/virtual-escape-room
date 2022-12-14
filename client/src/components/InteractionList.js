import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useGameContext } from '../utils/GlobalState';


const InteractionList = ({interaction}) => {
  const [state] = useGameContext();


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
           {/* ))} */}
      </Accordion>
    </div>
  );
}

export default InteractionList;