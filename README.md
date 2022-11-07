# CS5610_project2
CS5610 Project 2 - E-Business Card   
Author: Chun-We Tseng, Kuan-Tsa Chen   
Link to Home Page: https://ebusinesscard.herokuapp.com/?fbclid=IwAR3bHnEouHaaj2g43lRoxOc5ipkwHoI2nKth-Fry7oTWuqXh9HTNYkJMt0U
Class Link: https://johnguerra.co/classes/webDevelopment_fall_2022/

### Background

This is a web app with simple backend with Node.js, Express, Mongo, HTML5. The backend runs a Express server which talks to a remote mongoDB Atlas server. The frontend communicates with the backend Express server via route (route folder) as the entry point. 

### User Story
Jimmy went to a conference that last for a week. He received 20+ business cards per day. By the end of the week, he ended up with 100+ business cards. It was difficult for him to keep and organize all the cards. He might not need to contact these people immediately. Originally Jimmy was planning to store all the business cards in a box and keep it in a drawer at his place. Turns out the cards took too much space away from his apartments after a year. Keeping these business cards safely but also allows him to access them quickly can be difficult. He discovers the business card app and decides to give it a try.

 Jason went to a career fair and connected with a lot of people on LinkedIn. They have very different background and are working in different industries. One day, he decided to start a business and wanted to reach out to some of the project managers and software engineers that he met in the expo. It is difficult to filter out people in specific field.  He started to use the business card app and added all the physical business cards into his digital collections. He found it useful to sort people by tags and finally able to reach out to the right person in a shorter amount of time.

### Installation
To __download__ the project, simply git clone, or download the .zip file from github.
Once downloaded to your local machine:

To spin up backend/frontend server, go into the backend/frontend folder, and do the following:

1. Download all dependencies:
```
npm install
```
2. Then start server, using:
```
npm start
```

For security purposes, we will not provide mongoDB connection URL, so you will need to either create a local database, or remote one.
The recipes.csv data file will be provided in the repo for you to import to the database.

To import the .csv file into local mongoDB database:
1. Download mongo database tools, with this link [MONGO DATABASE TOOLS](https://www.mongodb.com/try/download/database-tools)
2. Then import csv to database via:
```
mongoimport -d [Database name] -c [Collections name] --type csv --file [locations of csv file] --headerline
```

### Functionality

This website that provides functionality:
- A visitor can register to become an user. Once becoming an user, he/she can login or logout, and access the profile (wallet) page, which contains his/her own business card and others' business cards that was created by the user.
- An user can delete any business card in his wallet, including his/her own card. a user cannot delete other people's reviews.
- A user can update all information besides the name on the business card in his own wallet. All the business cards that a user has in his/her wallet will show up on the home page if the user is logged in, otherwise default images are displayed. 


### Deploy Architecture
Our website is host on Heroku. We used AWS as our cloud service provider, and used EC2 instances as our servers for both backend and frontend. 



### Screenshots

![Screen Shot 2022-11-01 at 12 20 41 PM](https://user-images.githubusercontent.com/49644422/199321709-a83ef98a-eca2-46f0-b486-dc9ca7ba2eac.png)
![Screen Shot 2022-11-01 at 12 21 21 PM](https://user-images.githubusercontent.com/49644422/199321695-0f4bd2a7-4fe2-4d1a-8d6e-df1acceab47f.png)
![Screen Shot 2022-11-01 at 12 20 55 PM](https://user-images.githubusercontent.com/49644422/199321706-333e962d-4581-4731-bab4-adccf477825e.png)
![Screen Shot 2022-11-01 at 12 20 50 PM](https://user-images.githubusercontent.com/49644422/199321707-30b9a585-071f-43d5-88b0-e2f58968d557.png)




### Video Demonstration

https://www.youtube.com/watch?v=X0w-jLYk8I8
