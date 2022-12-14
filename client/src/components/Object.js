import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGameContext } from '../utils/GlobalState';
import InteractionList from './InteractionList';

const Object = ({object}) => {
    const [modalShow, setModalShow] = useState(false);
    const [state] = useGameContext();
    
    return (
    <>
        <Button variant="outline-danger" size="lg"onClick={() => setModalShow(true)}>{object.name}
        </Button>
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        object={object}
        show={modalShow}
        onHide={() => setModalShow(false)}
        >
        <Modal.Header closeButton>
          <Modal.Title id="object-modal">
            {object.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {state.interactions.map((interaction, idx) => (
                <div>
                    <InteractionList key={idx} interaction={interaction}/>
                </div>
          ))} */}
          <div>
            <InteractionList />
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={object.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Object