import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useGameContext } from '../utils/GlobalState'
import  { DropdownButton, Dropdown, Modal }  from 'react-bootstrap';
import { END_GAME } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const SolutionForm = (props) => {
    const [state] = useGameContext();
    const navigate = useNavigate();
    const [suspect, setSuspect] = useState({})
    const [weapon, setWeapon] = useState({})
    const [motive, setMotive] = useState({})


    const [endGame, { error }] = useMutation(END_GAME);

    const handleGameEnd = async () => {
      props.setTimerRunning(false);
      const score = (state.game.time_limit * 60) - props.timeLeft;
      if (state.correctSolution.suspect_id === suspect.object_id
        && state.correctSolution.weapon_id === weapon.object_id 
        && state.correctSolution.motive_id === motive.motive_id){
          try {
            const { data } = await endGame({
              variables: { gameId: state.game.game_id, final_solution_time: score }
            })
          } 
          catch (err) {
          console.error(err)
          }
          console.log("true")
          navigate ('/endgame/true')
        }
      else {
        try {
          const { data } = await endGame({
            variables: { gameId: state.game.game_id}
          })
        } 
        catch (err) {
        console.error(err)
        }
        console.log("false")
        navigate ('/endgame/false')
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
                {state.suspects.map((suspect, index) => (
                  <Dropdown.Item key={index} value={suspect.object_id} onClick={() => setSuspect(suspect)}>
                    {suspect.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {suspect.name}</p>
              </div>   
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the murder weapon...">
                {state.weapons.map((weapon, index) => (
                  <Dropdown.Item key={index} value={weapon.object_id} onClick={() => setWeapon(weapon)}>
                    {weapon.name}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {weapon.name}</p>
              </div>
              <div>
              <DropdownButton id="dropdown-basic-button" title="Choose the motive...">
                {state.motives.map((motive, index) => (
                  <Dropdown.Item key={index} value={motive.motive_id} onClick={() => setMotive(motive)}>
                    {motive.description}
                    </Dropdown.Item>
                ))}
              </DropdownButton>
              <p>You chose: {motive.description}</p>
              </div>  
              <div>    
              <button
                type="button"
                onClick={handleGameEnd}
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