
import  { combineReducers }  from 'redux'


import patientinfo from './patientinfo';
import allpatients from './allpatients';
import rxinfo from './rxinfo';
import submitrx from './submitrx';
import fillrx from './fillrx';
import iotinfo from './iotinfo';
import insurance from './insurance';

export default combineReducers({
  patientinfo,
  rxinfo,
  allpatients,
  submitrx,
  fillrx,
  iotinfo,
  insurance
});