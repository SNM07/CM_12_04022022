# SportSee : The physical activity tracking app

<p align="center">
The SportSee app measures your performance and fitness indicators. 
You can easily track your physical activity
</p>

![Mockup of the project](https://i.imgur.com/ILfQpOr.png)

<p align="center">
<a href="https://snm07.github.io/CM_12_04022022"> Live demo
</a>
</p>


## Prerequisites

-   [NodeJS](https://nodejs.org/en/)

## Dependencies

-   [React](https://reactjs.org/) 
-   [React-Router-Dom](https://reactrouter.com/web/guides/quick-start) 
-   [Axios](https://github.com/axios/axios) 
-   [Recharts.js](https://recharts.org/en-US/) 
-   [Sass](https://sass-lang.com/)

## Languages

- JS
- JSX
- SCSS


## Launching the project

Create a "master" folder on your computer.

#### Get the backend:
This project uses a micro API available [here](https://github.com/SNM07/CM_12_04022022_Backend).

Clone this repo in your "master" folder then follow the README instructions of this micro API repo.

#### Get the frontend:
Clone [this](https://github.com/SNM07/CM_12_04022022) in your master folder.

Go to my-app
 ```sh
   cd my-app
   ```
Then install NPM packages
   ```sh
   npm i
   ```
And run the project
   ```sh
   npm start
   ```

___

This project can also run without the micro API with the mocked datas it contains.


On the home page you can choose between user 12 or user 18 to see differents datas and also preview the error 404 page.


## Used endpoints

To retrieve user information, the project uses the endpoints below: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


## Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.