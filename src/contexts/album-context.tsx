import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IAlbum from '../models/IAlbum';
import IDetail from '../models/IDetail';

interface AlbumContextProps
{
    albums: IAlbum[];
    setAlbums: (albums: IAlbum[]) => void;
    getAlbumsContext: () => Promise<void>;
}

export const AlbumContext = createContext<AlbumContextProps>
(
 {albums : [],
  setAlbums: () => {},
  getAlbumsContext: () => Promise.resolve()}
);

export const AlbumProvider: React.FC= ({children}) => {
   
    const [albums, setAlbums] = useState<IAlbum[]>([]);    
    
    const getAlbumsContext = async () => {
        try {
            const albumResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/albums',
              ); 
              
              const fotosResponse = await axios.get(
                'https://jsonplaceholder.typicode.com/photos',
              );      
        
              const albums = (albumResponse.data as IAlbum[]).map(album => ({
                ...album,
                details: (fotosResponse.data as IDetail[]).filter(
                  detail => detail.albumId === album.id,
                ),
              }));
          setAlbums(albums);
        } catch (e) {
          console.error(e);
        }
      };

    const val = {albums,setAlbums,getAlbumsContext};
    
    return(
        <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>
    );

    
}

export const useAlbum = () => useContext(AlbumContext); 




