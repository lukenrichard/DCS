This project uses a Material-UI Card to display information about a User. The information of the User is gathered from https://jsonplaceholder.typicode.com/users/1.
The app is run using the command "npm start", which will open up a page in localhost:3000 that will display the Card with the User information.

The majority of the time spent on this project was formatting the card, as I have only used Material-UI once previously. I was able to use and implement the other technologies
easily as I have previous experience with them.

I only ran into one problem that I could not resolve, which was accessing the address and company objects within the User JSON object gathered from the API. When using proper notation
of data.address.street, for example, the street object was undefined, which is a problem I have not seen previously when trying to access JSON objects. I was able to work around this by storing the address and company objects inside their own respective states, which allowed me to access them. I would like to understand why these attributes were undefined when
accessing them from the entire User JSON object, however I wanted to complete this project rather quickly to show my abilities.
