import React, { useState, useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

// Setting up styles for Card component.
const useStyles = makeStyles({
  root: {
    minWidth: 600,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  // Using hooks to initialize data, address, and company states to hold User information for the component.
  const [data, setData] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');

  // Allows the card to use styles set previously.
  const classes = useStyles();

  // This function uses async/await and fetch to retrieve User info from an API with a GET call. 
  async function getUserInfo() {

    // Fetch User information with GET call and store as json variable in JSON format.
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let json = await response.json();

    // Update the states with User information aquired through GET call above.
    setData(json);
    setAddress(json.address);
    setCompany(json.company);
  }

  // This function behaves similarly to componentDidMount() if hooks were not used. This function is defined to run when Component is loaded onto the page
  // ensuring User information will always be on card.
  useEffect(() => {
    getUserInfo();
  }, []);


  // This information below is all JSX code to format the card on the page, User information is gathered from the JSON object kept in the state.
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <b>Name:</b> {data.name} (Username: {data.username})
          </Typography>
          <Typography className={classes.pos}>
            <b>Email:</b> {data.email}
          </Typography>
          <Typography className={classes.pos}>
            <b>Address:</b> {address.suite} on {address.street} St.
            <br />
            {address.city}, {address.zipcode}
          </Typography>
          <Typography className={classes.pos}>
            <b>Phone Number:</b> {data.phone}
            <br />
            <b>Website:</b> {data.website}
            <br />
            <b>Company Name:</b> {company.name}, {company.catchPhrase}
            <br />
            {company.bs}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;