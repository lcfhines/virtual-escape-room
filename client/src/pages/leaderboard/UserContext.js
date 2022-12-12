import React, { createContext, useContext, useState } from 'react';
// import createId from './createId';
export const UserContext = React.createContext();

export const useUserContext = () => useContext(UserContext);


export default function UserProvider({ children }) {
  const [users, setUsers] = useState([
    {
      rank: 1,
      name: 'testuser 1',
      time: '10m5s',
      click:37
    },
    {
      rank: 2,
      name: 'testuser 1',
      time: '14m5s',
      click:47
    },
    {
      rank: 3,
      name: 'testuser 1',
      time: '12m5s',
      click:27
    },
  ]);

  return (
    <UserContext.Provider
      value={{ users }}
    >
      {children}
    </UserContext.Provider>
  );
};
