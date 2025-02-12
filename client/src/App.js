import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Game from './pages/Game'
import Room from './pages/Room';
import { GameProvider } from './utils/GlobalState';
import EndGame from './pages/EndGame';

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
        <GameProvider>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
             <Route 
              path='/game/:game_id' 
              element={<Game />} 
            /> 
            <Route 
              path='/room/:room_id' 
              element={<Room />} 
            />
            <Route 
              path='/endgame/:correctFlag' 
              element={<EndGame />} 
            />
            <Route 
              path='*'
              element={<Home />}
              // element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
        </GameProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
