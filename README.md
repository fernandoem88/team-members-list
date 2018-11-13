# team-members-list
add/remove users to a list.
This project is done with **Typescript**, **React**, **React Router**, **Redux**, **Styled Components** and **Greensock**.

# installation

run the following commands.
```bash
npm i
npm start
```
and navigate to the following url: __http://localhost:3000/home__

# how to use

### Add team member

At the left of the main content in the home page, you will find the __add team__ button.
At the click event, it will show an input that allow you to search a user. to add a user you should press the __Enter__ key when the input is on the _:focus_ state.
the search takes everytime  1 sec to load a new user or to reject an error if the user does not exist.

### Delete a user.

When you pass the mouse over the user card, a tooltip will appear near the button where to click in order to delete the user. just click on it and the user will be removed from the list.

### Show all / collapse

The __show all__ button will appear if the number of users in the list is greater than 3. Users from 4th will be hidden. Click on it to show all the users in the list.

### go to team page / home

At the top right of the main container, there is a navigation button that allow you to go to _team page_ or _home page_ depending on its state.

### team page

In this page, there is an infinite roller that show one by one the name of all users in the db.

