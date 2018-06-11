import axios from 'axios';

import envDATA from "../../../../env.json"

console.log("backend  URL: ", window.location.hostname)
const url = "http://"+ window.location.hostname + ':8080/pd';


export const getALLPATIENTS = () => {
  return (dispatch) => {
    var sendurl = url;
    console.log('value of url : ' + url);
    console.log("value of hellothere from envDATA: ", JSON.stringify(envDATA.SERVER))
    axios.get(sendurl)
    .then((response)=>{
      console.log('inside response from all patients: ', response);
      dispatch(AXIOSRETURNALLPATIENTS(response))
    })
    .catch(error => {
      console.log('inside error from login auth and response : ', error);
      dispatch(AXIOSERRORALLPATIENTS(error))
    })
  }
}

//HERE ARE THE ACTIONS ->>> REDUCERS

export const AXIOSRETURNALLPATIENTS = (payload) => {
  console.log('inside AXIOSRETURN and payload ', payload);
  return{
    type: 'ALL_PATIENTS',
    data: payload.data
  }
}

export const AXIOSERRORALLPATIENTS = (payload) => {
  console.log('inside AXIOSERROR and payload ', payload);
  return{
    type: 'ALL_ERROR',
    data: payload
  }
}