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
  display: 'block',
  width: '20vw',
  height: '45vw',
};




class RxHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader 
            title='Prescriptions'
            style={styles.title}
          />
        </Card>
        <div>
        </div>
      </div>
    );
  }
}

export default RxHistory;