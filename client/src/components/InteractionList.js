import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useGameContext } from '../utils/GlobalState';
import { useParams } from 'react-router-dom';



const InteractionList = () => {
  // const [state] = useGameContext();
  // const {interaction_id} = useParams();
  // const interaction = state.interactions?.find(interaction => interaction.interaction_id === parseInt(interaction_id)) || {};
  // console.log(interaction);
  // console.log(interaction_id);

    return (
      <div>
        <Accordion>
          {/* {state.interactions && state.interactions.map((interaction, idx) => ( */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              insert interaction des
            </Accordion.Header>
            <Accordion.Body>
              insert reaction here
            </Accordion.Body>
          </Accordion.Item>
           {/* ))} */}
      </Accordion>
    </div>
  );
}

export default InteractionList;