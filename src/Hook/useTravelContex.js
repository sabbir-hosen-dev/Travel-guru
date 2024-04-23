import { useContext } from 'react'
import { TravelContex } from '../Context/UseContex'

const useTravelContex = () => {
  return useContext(TravelContex);
}

export default useTravelContex;
