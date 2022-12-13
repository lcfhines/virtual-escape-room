import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InteractionList from './InteractionList';

const ObjectModal = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            insert object name here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>insert object description here</p>
          {/* map through interactions, for each: */}
          <div>
            <InteractionList />
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

const Object = ({object}) => {
    const [modalShow, setModalShow] = useState(false);
    return (
    <>
        <Button variant="outline-danger" size="lg"onClick={() => setModalShow(true)}>{object.name}
        </Button>
        <ObjectModal 
        show={modalShow} 
        onHide={() => setModalShow(false)}
        />
    </>
    )
}

export default Object