import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = {
  title: {
    backgroundColor: '#9ebbc6',
  }
};

var cardStyle = {
  width: '25vw',
}

class DoctorSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Card  style={cardStyle}>
        <CardHeader 
          title='Search for a patient:'
          style={styles.title}
        />
        <div>
          <FormControl>
            <Select
              value=""
              onChange={this.handleChange}
              name="age"
              displayEmpty
              // className={classes.selectEmpty}
            >
              <MenuItem value="" disabled>
                Select patient name
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        </Card>
      </div>
    );
  }
}

export default DoctorSearch;