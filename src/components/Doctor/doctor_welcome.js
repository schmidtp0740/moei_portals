import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { CardContent, Typography } from '@material-ui/core';



const styles = {
  title: {
    backgroundColor: '#9ebbc6',
  }
};

var cardStyle = {
  width: '100%'
}

class DoctorWelcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div style={cardStyle}>
        <Card>
        <CardHeader 
          title='Welcome, Doctor Sloan!'
          style={styles.title}
        />
        </Card>
        <Card>
          <CardContent>
            <Typography>
              Select a patient and you will be able to see their chart and assign them prescriptions.
              Prescriptions will be stored on the blockchain and pharmacists will then be able to fill them.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DoctorWelcome;