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
        <div>
        <Modal.Body>
          {object.interactions.map((interaction, idx) => (
                <div>
                    <InteractionList key={idx} interaction={interaction}/>
                </div>
          ))}
        </Modal.Body>
        </div>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Object