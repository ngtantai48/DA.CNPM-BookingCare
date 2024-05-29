"# DA.CNPM-BookingCare"

## Requirements

Node 14.7 for project

## Install to run the project on localhost

* Create a database named "cogangteam" in Workbench or PHPmyadmin.

1. Backend (Server - NodeJS)

    * In Nodejs folder. Create a .env file with content similar to the .env.example file, then set up the necessary configurations (PORT, NODE_ENV,...).

    * In Nodejs/src/config. Create a config.js file with content similar to the config.json.env file, then set up the necessary configurations (username, password, database,...).

    * Install the necessary packages. In .../Nodejs> terminal, run command:

    ```
      > npm install
    ```

    * Create a tables in the database from the models. In .../Nodejs/src> terminal:

    ```
      > npx sequelize-cli db:migrate
    ```

    * To execute seed files and data will be inserted into the tables. In .../Nodejs/src> terminal:

    ```
      > npx sequelize-cli db:seed:all
    ```

    * Run the Server.

    ```
      > npm start
    ```

2. Frontend (Client - ReactJS)

    * In Reactjs folder. Create a .env file with content similar to the .env.example file, then set up the necessary configurations.

    * Install the necessary packages. In .../Reactjs> terminal, run command:

        ```
          > npm install
        ```

    * Runs the app in the development mode

        ```
          > npm start
        ```
