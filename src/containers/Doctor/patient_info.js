import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


const styles = {
  title: {
    backgroundColor: '#9ebbc6',
  },
  body: {
    padding: '12px',
  }
};

var cardStyle = {
  width: '30vw',
}

class PatientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div style={cardStyle}>
        <div style={styles.title}>
          <Card>
          <CardHeader 
            title='Patient Info'
            style={styles.title}
          />
          </Card>
          <div style={styles.body}>
            <Card>
              <CardHeader
                title='ID'
                styles={{padding: '10px'}}
              />
            </Card>
          </div>
          <div style={styles.body}>
            <Card>
              <CardHeader
                title='DOB'
              />
            </Card>
          </div>
          <div style={styles.body}>
            <Card>
              <CardHeader
                title='Address'
              />
            </Card>
          </div>
          <div style={styles.body}>
            <Card>
              <CardHeader
                title='Ethnicity'
              />
            </Card>
          </div>
          <div style={styles.body}>
            <Card>
              <CardHeader
                title='Phone'
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientInfo;