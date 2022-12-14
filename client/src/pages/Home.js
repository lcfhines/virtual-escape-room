import React from "react";
import Auth from '../utils/auth';
import Rules from '../components/Rules';
import Container from 'react-bootstrap/Container';

import GameList from '../components/GameList';
import '../styles/Home.css';


const Home = () => {

    if (Auth.loggedIn()){
      
      return (
        <Container fluid className="g-0 fullheight">
        <div className="homepage fullheight">
          <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch!</h1>
          <h3 className="available">Available Games</h3>
          <GameList />
        </div>
        </Container>
      )
    } else {
      return (
        <Container fluid className="g-0 fullheight">
        <div className="homepage fullheight">
          {/* <h1 className="intro">Solve a murder mystery or escape from a psycho killer all from the comfort of your couch!</h1> */}
          <Rules />
        </div>
        </Container>
      )
    }
}

export default Home;