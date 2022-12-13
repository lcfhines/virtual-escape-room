import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGameContext } from '../utils/GlobalState';
import InteractionList from './InteractionList';
import { useParams } from 'react-router-dom';

const ObjectModal = (props) => {
    const [state] = useGameContext();
    // const {object_id} = useParams();
    // const object = state.objects?.find(object => object.object_id === parseInt(object_id)) || {};
    // console.log(object);
    // console.log(object_id);

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
          {/* {state.object.interactions && state.object.interactions.map((interaction, idx) => (
                <div>
                    <InteractionList key={idx} interaction={interaction}/>
                </div>
          ))} */}
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