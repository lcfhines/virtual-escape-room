import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Leaderboard from './pages/leaderboard/Leaderboard'
import Game from './pages/game/Game'
// import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
             <Route 
              path='/game' 
              element={<Game />} 
            />
            {/* <Route 
              path='/game/:game_id' 
              element={<Game />} 
            />
            <Route 
              path='/room/:game_id:room_id' 
              element={<Room />} 
            /> */}
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
