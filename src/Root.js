import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Doctor from './screens/DoctorScreen/DoctorScreen.js';
import Insurance from './screens/Insurance/Insurance.js';
import Main from './screens/Main/Main.js';
import Pharmacist from './screens/Pharmacist/Pharmacist.js';



const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={Main} />
      <Route path="/doctor" component={Doctor} />

    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root