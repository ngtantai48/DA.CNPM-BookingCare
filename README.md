"# DA.CNPM-BookingCare"

## Requirements
Node 14.7 for project

## Install to run the project on localhost
1. Backend (Server - NodeJS)
    * Create a database named "cogangteam" in Workbench or PHPmyadmin.
      * In NodeJS's src/config/config.json, change the configuration in development (such as username, password, database, host,...) to match the local configuration.
    * Open terminal of project and go into the NodeJS folder
    ```
      cd NodeJS
    ```
    and run the following command to create a tables in the database from the models
    ```
      npx sequelize-cli db:migrate
    ```

    * To execute seed files and data will be inserted into the tables. We run a simple command.
    ```
      npx sequelize-cli db:seed:all
    ```
2. Frontend (Client - ReactJS)

   *...
