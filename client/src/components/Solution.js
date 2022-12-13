import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useGameContext } from '../utils/GlobalState'
import  { DropdownButton, Dropdown, Modal }  from 'react-bootstrap';


const SolutionForm = (props) => {
    const [state] = useGameContext();

    const [suspect, setSuspect] = useState("")
    const [weapon, setWeapon] = useState("")
    const [motive, setMotive] = useState("")

  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Guess your solution to escapte the mansion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button"
                onChange={(e) => setSuspect(e.target.value)}
                value={suspect}>
                <option>Choose your prime suspect...</option>
                {state.solutions.suspects.map((suspect, index) => (
                  <Dropdown.Item key={index} value={suspect.object_id}>
                    {suspect.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              </div>    
              <div>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button"
                onChange={(e) => setWeapon(e.target.value)}
                value={weapon}>
                <option>Choose the murder weapon...</option>
                {state.solutions.weapons.map((weapon, index) => (
                  <Dropdown.Item key={index} value={weapon.object_id}>
                    {weapon.name}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              </div>
              <div>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button"
                onChange={(e) => setMotive(e.target.value)}
                value={motive}>
                <option>Choose the suspect's motive...</option>
                {state.solutions.motives.map((motive, index) => (
                  <Dropdown.Item key={index} value={motive}>
                    {motive.description}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              </div> 
              <div>    
              <button
                type="button"
                onClick={() => {
                  addSolution({ suspect: suspect, weapon: weapon, motive: motive});
                }}
              >
                Submit Solution
              </button>
            </div>
        </Modal.Body>
        <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
  )}

export default SolutionForm;