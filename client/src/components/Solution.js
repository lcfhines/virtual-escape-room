import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useGameContext } from '../utils/GlobalState'


const SolutionForm = () => {
    const [state] = useGameContext();

    const [suspect, setSuspect] = useState("")
    const [weapon, setWeapon] = useState("")
    const [motive, setMotive] = useState("")


  return (
    <div>
      {solution ? (
        <>
          <section className="solution-dropdown">
            <table>
              <thead>
                <tr>
                  <th>Suspect</th>
                  <th>Weapon</th>
                  <th>Motive</th>
                </tr>
              </thead>
              <tbody>
                {solution.map((solution) => (
                  <tr key={solution.id}>
                    <td>{character_id}</td>
                    <td>{object_id}</td>
                    <td>{motive_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
            <div>
            <select
                onChange={(e) => setSuspect(e.target.value)}
                value={suspect}>
                <option>Choose your prime suspect...</option>
                {state.solutions.suspects.map((suspect, index) => (
                  <option key={index} value={suspect.object_id}>
                    {suspect.name}
                  </option>
                ))}
              </select>
              </div>    
              <div>
              <select
                onChange={(e) => setWeapon(e.target.value)}
                value={weapon}>
                <option>Choose the murder weapon...</option>
                {state.solutions.weapons.map((weapon, index) => (
                  <option key={index} value={weapon.object_id}>
                    {weapon.name}
                  </option>
                ))}
              </select>
              </div>
              <div>
              <select
                onChange={(e) => setMotive(e.target.value)}
                value={motive}>
                <option>Choose the suspect's motive...</option>
                {state.solutions.motives.map((motive, index) => (
                  <option key={index} value={motive}>
                    {motive.description}
                  </option>
                ))}
              </select>
              </div>      
              <button
                type="button"
                onClick={() => {
                  addSolution({ suspect: suspect, weapon: weapon, motive: motive});
                }}
              >
                Submit Solution
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that you have not selected an option from every dropdown, please choose a suspect, weapond and motive for the murder!</span>
      )}
    </div>
  );
  }

export default SolutionForm;