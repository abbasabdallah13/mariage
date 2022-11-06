# Mariage

## Project context

Development of a GuestsList organizer.  
The guest will receive the link for the web app with a Username and Password.   
After clicking the link the guest will be on the main page (login page). 

### Content of Login page : 

Title ( names of couple ).  
Introduction Text.  
D-DAY ( Live Timer Days hours minutes ).  
Username to enter. 
Password to enter.  
Login Button. 

After the guest logged in he will navigate to the main page ( Questions ).  

### Questions : 

#### First question for guest :   

#### Question 1 : 
Are you available to come to the wedding ? - YES NO  

#### Question 2 :   
##### If they have partner :   
is (name of partner) coming ? yes or no 

##### If they have kids : 

Are/is (name of kids) coming ? yes or no
Then if kids come ask for age .


If first question is no then  - ENDING MESSAGE 

Then question to ask if they need a room for 1 night or for 2 night.
Telling the price is 70E per pers.

if they take this option sent hotel info 

### All the guest will have differente questions (path) , all the informations for the guests are stocked in the DataBase so the front need to dynamically set guests path.
take a look at the DB to understand a bit more .




<img width="810" alt="Capture d’écran 2022-11-06 à 21 53 39" src="https://user-images.githubusercontent.com/104718280/200194691-d01dc231-bdc4-48f8-a402-afb85a62b782.png">



## Instructions
1. Always push on your own branch and make sure to delete the branch from VS Code/Github after merging 
2. Before Merging on main ask for review to your collabo
3. Try to always read this page before you start working on project . 
4. Keep good communication so we don't work on the same . 
5. Try to improve and keep this ReadMe updated.
6. Comment code.

## To be done
Need to get the items from the db (guest) for now only getting the guests.
(Julien) will change the DB content Name for guests and not guest , so we don't get confused (not hard but i need to make the guestList from scratch)
When we fetch properly we can move the fetch to data.js 
Need to start the css for the login page and when we finally get the guest from guests we can set the logging (need to get username and password from db.


## Done 
Back end set with Sanity. will be improve as we move.
Front connected to sanity , getting the Guest from the DB.
Login page created


## Design 

### Design of Login Page. 
![웹 1920 – 5](https://user-images.githubusercontent.com/104718280/200194975-902b15eb-0d95-4b84-9363-e397f57ab52d.png)


