import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import Box from "@material-ui/core/Box";

// Setting up styles for Card and Div components.
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "fixed",
    top: 0,
    left: 0
  },
  autoCenter: {
    margin: "auto",
    width: 600,
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12,
  },
  bold: {
    fontWeight: 600,
    display: "inline"
  },
  inline: {
    display: "inline"
  },
  nameFont: {
    fontSize: 26
  }
});

function UserCard() {
  // Using hooks to initialize data state to hold User information for the component.
  const [data, setData] = useState('');

  // Allows the card to use styles set previously.
  const classes = useStyles();

  // This function uses async/await and fetch to retrieve User info from an API with a GET call. 
  async function getUserInfo() {

    // Fetch User information with GET call and store as json variable in JSON format.
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let json = await response.json();

    // Update the state with User information aquired through GET call above.
    setData(json);
  }

  // This function behaves similarly to componentDidMount() if hooks were not used. This function is defined to run when Component is loaded onto the page
  // ensuring User information will always be on card.
  useEffect(() => {
    getUserInfo();
  }, []);


  // This information below is all JSX code to format the card on the page, User information is gathered from the JSON object kept in the state.
  return (
    <div className={classes.root}>
      <Card className={classes.autoCenter}>
        <CardContent>
          <Typography className={classes.nameFont}>
            <Box className={classes.bold}>
              Name: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.name} (Username: {data.username})
            </Box>
          </Typography>
          <Typography className={classes.pos}>
            <Box className={classes.bold}>
              Email: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.email}
            </Box>
          </Typography>
          <Typography className={classes.pos}>
            <Box className={classes.bold}>
              Address: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.address && data.address.suite} on {data.address && data.address.street} St.
            </Box>
            <Box>
              {data.address && data.address.city}, {data.address && data.address.zipcode}
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.bold}>
              Phone Number: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.phone}
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.bold}>
              Website: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.website}
            </Box>
          </Typography>
          <Typography>
            <Box className={classes.bold}>
              Company Name: {" "}
            </Box>
            <Box className={classes.inline}>
              {data.company && data.company.name}, {data.company && data.company.catchPhrase}
            </Box>
            <Box>
              {data.company && data.company.bs}
            </Box>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserCard;