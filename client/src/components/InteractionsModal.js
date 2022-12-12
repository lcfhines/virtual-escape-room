import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

const InteractionModal = (props) => {
    // useParams to get object_id, query interactions to get all interactions

    const [open, setOpen] = useState(false);

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
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
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
    
}

export default InteractionModal;