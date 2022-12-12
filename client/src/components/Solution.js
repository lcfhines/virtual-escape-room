import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useGameContext } from '../utils/GlobalState'


const SolutionForm = () => {
    const [state] = useGameContext();

  // Initialize state for new students and new student majors

  return (
    <div>
      {solutions ? (
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
                    <td>{character.id}</td>
                    <td>{object.id}</td>
                    <td>{motive.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
            <div>
            <select
                onChange={(e) => setNew(e.target.value)}
                value={newStudentMajor}>
                <option>Choose major...</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              </div>    
              <div>
              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}>
                <option>Choose major...</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              </div>
              <div>
              <select
                onChange={(e) => setNewStudentMajor(e.target.value)}
                value={newStudentMajor}
              >
                <option>Choose major...</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              </div>      
              <button
                type="button"
                onClick={() => {
                  addStudent({ name: newStudentName, major: newStudentMajor });
                  // Empty the input field and reset the dropdown after buttons is clicked
                  setNewStudentMajor('');
                  setNewStudentName('');
                }}
              >
                Submit Solution
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that you have not selected an option from every dropdown!</span>
      )}
    </div>
  );
 
  }

export default SolutionForm;