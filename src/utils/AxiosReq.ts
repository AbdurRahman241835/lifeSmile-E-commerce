import axios from 'axios';
// import { local_network_address, BASE_URL } from '../constants/Keys';
import { Platform } from 'react-native';
import { BASE_URL, local_network_address } from '../constants/keys';

export const makeRequest = async (endpoint : string, method = 'get', data  : any = null, headers = {}) => {
    
    let API_URL = BASE_URL
    
    //    if ( Platform.OS === 'android') {      
    //   API_URL = `${local_network_address}/api`; 
    // }
    
    let url =`${API_URL}/${endpoint}`;
   
    try {
      const config = {
        method,
        url,
        data,
        headers,
      };
  
      const response = await axios(config);
      return {result : response.data, status : response.status};
    } catch (error) {
      throw error;
    }
  };
