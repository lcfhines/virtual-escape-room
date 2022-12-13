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
    <div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Guess your solution to escape the mansion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <DropdownButton id="dropdown-basic-button" title="Choose your prime suspect..."
                onChange={(e) => setSuspect(e.target.value)}
                value={suspect}>
                {/* <option>Choose your prime suspect...</option> */}
                {state.suspects.map((suspect, index) => (
                  <Dropdown.Item key={index} value={suspect.object_id}>
                    {suspect.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              </div>   
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the murder weapon..."
                onChange={(e) => setWeapon(e.target.value)}
                value={weapon}>
                {/* <option>Choose the murder weapon...</option> */}
                {state.weapons.map((weapon, index) => (
                  <Dropdown.Item key={index} value={weapon.object_id}>
                    {weapon.name}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              </div>
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the motive..."
                onChange={(e) => setMotive(e.target.value)}
                value={motive}>
                {/* <option>Choose the suspect's motive...</option> */}
                {state.motives.map((motive, index) => (
                  <Dropdown.Item key={index} value={motive.motive_id}>
                    {motive.description}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              </div>  
              <div>    
              <button
                type="button"
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