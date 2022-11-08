# Mariage

Development of a GuestsList organizer.  
The guest will receive the link for the web app with a Username and Password.  
After clicking the link the guest will be on the main page (login page).

<br>
<br>

### `Content of Login page`

- Title ( names of couple )
- Introduction Text
- D-DAY ( Live Timer Days hours minutes )
- Username to enter
- Password to enter
- Login Button

After the guest logged in he will be navigated to the main page ( Questions ).

<br>
<br>

### `Questions`

- Question 1 : Attending

  ```
  Q. Are you available to come to the wedding ?
  A. YES / NO
  ```

- Question 2-1 : Plus ones `partner`

  ```
  --- If they have partner ---

  Q. is (name of partner) coming ?
  A. yes / no
  ```

- Question 2-2 : Plus ones `kids`

  ```
  --- If they have kids ---

  Q. Are/is (name of kids) coming ?
  A. yes / no

  --- if the answer is yes ---

  Q. How old they are?
  A. 000 years old

  --- if the answer is no ---

  display ENDING MESSAGE
  ```

- Question 3 : Room

  ```
  --- How many night they need room for ---

  Q. Do you need a room for 1 night or for 2 night? (The price is 70E per pers)
  A. 1 night / 2 nights

  if they take this option, send the hotel info
  ```

<br>
<br>

### `Questions are depending on the Guests.`

All guests will have differente questions (path), all informations for the guests are stored in DataBase. So the front need to dynamically set guests path. <br>
Take a look at the DB to understand a bit more.

<img height="300" alt="Capture d’écran 2022-11-06 à 21 53 39" src="https://user-images.githubusercontent.com/104718280/200194691-d01dc231-bdc4-48f8-a402-afb85a62b782.png">

<br>
<br>

---

<br>
<br>

## Instructions

1. Always push on your own branch and make sure to delete the branch from VS Code/Github after merging
2. Before Merging on main ask for review to your collabo
3. Try to always read this page before you start working on project .
4. Keep good communication so we don't work on the same .
5. Try to improve and keep this ReadMe updated.
6. Comment code.

## Help

### gitCommand

1. <PUSH> In your vscode

- git add . 
- git commit -m 'something you changed'
- git push

2. <MERGE> In your github

- Make pull request (with code review etc.)
- When you get appoved, merge it 
- delete merged branch

3. <DELETE AND START AGAIN> In your vscode

- git checkout main
- git branch (should display main and your branch + you are now in main)
- git branch -D branchName
- git branch (should display only main + you are now in main)
- git pull (it will pull all new version of main + you are now in main)
- git checkout -b newBranchName (you are now in your new branch)


## To Do

- Need to do the CSS for the Login page (SEE TEMPLATE DOWN THE PAGE)
- Need to organise the fetch in data.js
- One error need fix in Logging page when the username does not exist

## Done

- Back end set with Sanity. will be improve as we move.
- Front connected to sanity , getting the Guest from the DB.
- Login page created.
- DB content Name changed to guests instead of guest.
- Created all the guests info in db.
- Added password slug to the guests in the back auto generating. Added pictures for the login pages.
- The Logging page is done for the fonctionality (1 error)
- The DDAY is done

## what are you working on ? 
Julien : standby EOD

## Design

- Login page

  <img height="500" alt="Capture d’écran 2022-11-06 à 21 53 39" src="https://user-images.githubusercontent.com/104718280/200194975-902b15eb-0d95-4b84-9363-e397f57ab52d.png">
