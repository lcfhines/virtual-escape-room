import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useGameContext } from '../utils/GlobalState'
import  { DropdownButton, Dropdown, Modal }  from 'react-bootstrap';
import { END_GAME } from '../utils/mutations';
import { useMutation } from '@apollo/client';


const SolutionForm = (props) => {
    const [state] = useGameContext();

    const [suspect, setSuspect] = useState("")
    const [weapon, setWeapon] = useState("")
    const [motive, setMotive] = useState("")

    const [endGame, { error }] = useMutation(END_GAME);

    const handleGameEnd = async (event) => {
      event.preventDefault();
      // stop timer regardless

      try {
        const { data } = await endGame({
          variables: { gameId: state.game.game_id }
        })
      } catch (err) {
        console.error(err)
      }
    }

  return (
    <div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Guess your solution to escape the mansion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
              <DropdownButton id="dropdown-basic-button" title="Choose your prime suspect...">
                {/* <option>Choose your prime suspect...</option> */}
                {state.suspects.map((suspect, index) => (
                  <Dropdown.Item key={index} value={suspect.object_id} onClick={() => setSuspect(suspect.name)}>
                    {suspect.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {suspect}</p>
              </div>   
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the murder weapon...">
                {/* <option>Choose the murder weapon...</option> */}
                {state.weapons.map((weapon, index) => (
                  <Dropdown.Item key={index} value={weapon.object_id} onClick={() => setWeapon(weapon.name)}>
                    {weapon.name}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {weapon}</p>
              </div>
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the motive...">
                {/* <option>Choose the suspect's motive...</option> */}
                {state.motives.map((motive, index) => (
                  <Dropdown.Item key={index} value={motive.motive_id} onClick={() => setMotive(motive.description)}>
                    {motive.description}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {motive}</p>
              </div>  
              <div>    
              <button
                type="button"
                onClick={handleGameEnd}
                // onClick={() => {
                //   addSolution({ suspect: suspect, weapon: weapon, motive: motive});
                // }}
              >
                Submit Solution
              </button>
            </div>
        </Modal.Body>
        <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </div>
  )}

export default SolutionForm;