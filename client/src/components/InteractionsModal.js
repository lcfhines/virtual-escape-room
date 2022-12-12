import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';


const InteractionModal = () => {
    // useParams to get object_id, query interactions to get all interactions
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='interactions-modal'>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Insert name of object here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='interactions'>
            {/* map through interactions, for each interaction have a list item that contains the interaction text and a button that opens the reaction */}
            <li>Insert interaction text here<>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    >
                    +
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                    Insert reaction text here
                    </div>
                </Collapse>
                </>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
    
}

export default InteractionModal;