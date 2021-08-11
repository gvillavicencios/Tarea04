import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IUser from '../models/IUser';

interface UserContextProps {
  user: IUser[];
  setUser: (user: IUser[]) => void;
  getUserContext: () => Promise<void>;
}

export const UserContext = createContext<UserContextProps>
({   
    user: [],
    setUser: () => {},
    getUserContext: () => Promise.resolve()    
  }
);

export const UserProvider: React.FC= ({children}) => {
   
  const [user, setUser] = useState<IUser[]>([]);    
  
  const getUserContext = async () => {
      try {        
        const response = await axios.get(
              'https://jsonplaceholder.typicode.com/users',
            );                               
            setUser(response.data);
      } catch (e) {
        console.error(e);
      }
    };

  const val = {user,setUser,getUserContext};
  
  return(
      <UserContext.Provider value={val}>{children}</UserContext.Provider>
  );

  
}
export const useUser = () => useContext(UserContext);