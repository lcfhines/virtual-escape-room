import React from 'react';
import Container from 'react-bootstrap/Container';

const Rules = () => {
    return (
        <Container>
        <div>
            <br></br>
            <h1>Do you dare to escape where countless have tried and failed?</h1>
            <br></br>
            <div id="instruction">
                <h2>How to play</h2>
                <ul>
                    <li>Choose which room you would like to enter</li>
                    <li>Read the scenario provided</li>
                    <li>Once you are in the room, interact with the various objects and/or people to gather clues</li>
                    <li>Depending on your interactions, you may unlock hidden paths or further interactions, so look out!</li>
                    <li>In order to escape the room, return to the starting location and provide your answer. If you are right, you escape; if you are wrong, well, let us hope you are right!</li>
                </ul>
            </div>
            <div id="rule">
                <h2>Rules</h2>
                <ul>
                    <li>You start in a room</li>
                    <li>Explore and interact to gather clues</li>
                    <li>Complete the game in the given amount of time</li>
                    <li>Submit your answer in the starting room</li>
                    <li>Leaderboard ranks based on number of attempts first, then completion time</li>
                </ul>
            </div>
        </div>
        </Container>
    );
}

export default Rules;