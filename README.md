"# DA.CNPM-BookingCare"

## Requirements

Node 14.17 for project

## Install to run the project on localhost

- Create a database named "cogangteam" in Workbench or PHPmyadmin.

1. Backend (Server - NodeJS)

   - Create a database named "cogangteam" in Workbench or PHPmyadmin.
   - Create an .env file with content similar to the .env.example file, then set up the necessary configurations (PORT, NODE_ENV, DB_USERNAME, DB_PASSWORD...).
   - Open terminal, go into the "NodeJS" folder, then install the necessary packages.

   ```
     > cd Nodejs
   ```

   ```
     > npm install
   ```

   - To create a tables in the database from the models

   ```
     > npx sequelize-cli db:migrate
   ```

    * To execute seed files and data will be inserted into the tables

    ```
      > npx sequelize-cli db:seed:all
    ```

   - Run the Server

   ```
     > npm start
   ```

2. Frontend (Client - ReactJS)

   - Open terminal of project and go into the "Reactjs" folder then install the necessary packages.

   ```
     > cd Reactjs
   ```

   ```
     > npm install
   ```

   - Runs the app in the development mode

   ```
     > npm start
   ```

   XTrung hello
