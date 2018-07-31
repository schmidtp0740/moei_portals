import React, { Component } from 'react';

import DoctorWelcome from './doctor_welcome';
import DoctorSearch from '../../containers/Doctor/patient_search';
import RxHistory from '../../containers/Doctor/rx_history';
import PatientInfo from '../../containers/Doctor/patient_info';

export default class Doctor extends Component {
  render() {
    return (
      <div>
        <DoctorWelcome />
        <DoctorSearch />
        <RxHistory />
        <PatientInfo />
      </div>
    );
  }
}