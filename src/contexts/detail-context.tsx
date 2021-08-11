import axios from 'axios';
import React, {createContext, useContext, useState} from 'react';
import IDetail from '../models/IDetail';

interface DetailContextProps {
  detail: IDetail[];
  setDetail: (detail: IDetail[]) => void;
  getDetailsContext: (albumId: number) => Promise<void>;
}

export const DetailContext = createContext<DetailContextProps>({
  detail: [],
  setDetail: () => {},
  getDetailsContext: () => Promise.resolve(),
});

export const DetailProvider: React.FC = ({children}) => {
  const [detail, setDetail] = useState<IDetail[]>([]);
  const getDetailsContext = async (albumId: number) => {
    try {      
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      );
      setDetail(response.data);  
    } catch (e) {
      console.error(e);
    }
  };
  const val = {detail, setDetail, getDetailsContext};
  return <DetailContext.Provider value={val}>{children}</DetailContext.Provider>;
};

export const useDetail = () => useContext(DetailContext);