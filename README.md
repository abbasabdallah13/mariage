# Mariage

Development of a GuestsList organizer.  
Guests will receive the link for the web app with a Username and Password.  
The link will take the user to the login page.
After they log in they will have few questions , the anwsers will be stocked and sent to the customers.

<br>

## Contents of Login page

- Title ( names of the couple )
- Introduction Text
- D-DAY ( Live Timer Days hours minutes )
- Username input for login
- Password input for login
- Button for login

Once the user logs in, they will be navigated to the main page containing Questions.

<br>

## Questions

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

  Go to next question
  ```

- Question 3 : Room

  ```
  --- How many night they need room for ---
  ```

There is 2 type of guest :

- Guest 1 : will have choice between 1 or 2 night(friday and saturday )
- Guest 2 : will have only saturday night

- Guest 1 :
  Q. You can choose to stay over friday and saturday night (76e per pers)
  A. YES/NO

  - If yes :
    Q.Friday / Saturday / Both
    A. Need to select one answer

  if they take this option, Message : We will come back to you for more informations

  ```

  ```

- Guest 2 :
  Q. You can stay over on saturday night (76e per pers)
  A. YES/NO

  - If yes : Message : We will come back to you for more informations

- `Questions are depending on the Guests.`

  All guests will have different questions (path).<br>
  All information for guests is stored in DataBase.<br>
  So front needs to be dynamically set according to the path of guests. <br>
  Take a look at the DB to understand more.

  <img height="300" alt="Capture d’écran 2022-11-06 à 21 53 39" src="https://user-images.githubusercontent.com/104718280/200194691-d01dc231-bdc4-48f8-a402-afb85a62b782.png">

<br>
<br>

---

<br>
<br>

## Instructions

1. Always push on your own branch and make sure to delete the branch on VS Code/Github after merging
2. Before Merging on main ask for review to your collabo
3. Try to always read this page before you start working on project .
4. Keep good communication so we don't work on the same task.
5. Try to improve and keep this ReadMe updated.
6. Comment code.

## To Do

- On mobile, when you click the input, the screen goes up and ruin the design. Need to figure out what to do for it.
- Need to find a way to hash the password
- Clean up the dependencies (i.e. tailwind, postcss etc.)
- Sort out convention

## In Progress

- Handle the answers (maybe `accommodation1Night` and `accommodation2Night` should be in one question?)
- Fetch request with updated user answer (will use `infoList` state)
- CSS for login page, done for all size. Need to work on font (size and familly)
  we have a scroll using the toggle device toolbar but not when using normal broswer sizing. Will it be an issue ? or just dev tools bug .(using overflow hidden)

## Done

- Set Backend with Sanity
- Connect Frontend to sanity (getting the Guest from the DB)
- Create Login page
- Change DB name to `guests` from `guest`
- Create guests info in DB.
- Add auto generating password slug to the guests in DB
- Add pictures for the login pages
- Create login feature
- Create DDAY feature
- Set security feature (user cannot access home page from url if not logged in)
- Fix login page error (no reaction when no user found)
- Organise fetch for guests in utils/Guests.js
- Add question feature depending on guest type(reception/wine)

## what are you working on ?

Julien : css login page responsive
Sunny : question edit, styling login page / exit page - responsive

## Design

- Web - Login page

![웹 웨딩](https://user-images.githubusercontent.com/104718280/201543537-663d94ec-d99f-415a-9599-8fb86625f213.png)

- Mobile/tablet - Login page
  ![웨딩1](https://user-images.githubusercontent.com/104718280/201543569-578cead5-0d0c-4e0d-9786-9fea41c5f8e6.png)

- Assets
  ![배경-완성](https://user-images.githubusercontent.com/104718280/201543594-0db8a7a0-0e8f-42f6-8cc4-e34760e0bd0a.png)

## Useful info - git commands

1. <PUSH> In your vscode

- git add .
- git commit -m 'something you changed'
- git push

2. <MERGE> In your github

- When you achieved some tasks (i.e. features, refactors, etc.)
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
