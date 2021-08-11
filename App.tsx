 import React from 'react';
 import StartScreen from './src/components/screens/StartScreen';
 import { AlbumProvider } from './src/contexts/album-context';
 import { DetailProvider } from './src/contexts/detail-context';
import { UserProvider } from './src/contexts/user-context';
 
 const App = () => {
   return (
     <AlbumProvider>     
       <DetailProvider>
         <UserProvider>
            <StartScreen />
            </UserProvider>
         </DetailProvider>       
     </AlbumProvider>
   );
 };
 
 export default App;
