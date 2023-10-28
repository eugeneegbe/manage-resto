# manage-resto
Small restaurant management system in Vue + Express

## Project setup
* Install client dependencies from `src`
```
npm install
```
* Install the server dependences from `src/assets/db` using same command as above

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run database server

* Create the database from the `src/assets/db`
```
sqlite3 restaurant.db
```

* Create table following tables
```
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email text NOT NULL UNIQUE,
  name text NOT NULL,
  passcode
);

CREATE TABLE product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text NOT NULL UNIQUE,
  stock REAL NOT NULL,
  price REAL NOT NULL
);

```
* Run the server from `src/assets/db`
```
node server.js
```

== Dcoker Setup ==
You may not want to go through the stress of setting up the different components separately, just use the following commmand

```docker-compose -f docker-compose.yaml up ```