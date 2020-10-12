#  course Title: API Design in Node.js (using Express & Mongo)
## Github [repo](https://github.com/FrontendMasters/api-design-node-v3)
## link: [API Design in Node.js, v1](https://frontendmasters.com/courses/api-design-nodejs/)
## Course notes: [Notes](https://fem-node-api.netlify.com/)

## Getting started
* [Heroku app](https://dashboard.heroku.com/apps/node-mongo-api-app/resources?justInstalledAddonServiceId=3dfb031f-23f4-4123-856f-5cb95ecdadc9)
* [Github Repo](https://github.com/hussein8844/api-mongo-node)

## Running the app
* installing npm install
* build: npm run build
* debugging: npm run start-brk, [localhost at 3000](http://localhost:3000/)
* running locally: npm run start-brk, [localhost at 3000](http://localhost:3000/)

---

# MongoDB
* Open new shell: mongod
* Open new shell: mongo

---

# Heroku
* pushing to Heroku: git push heroku master
* Logging: heroku logs --tail
* Opening app in Heroku: heroku open
---

# Running spec files:
running your spec files:
without breakpoint:
npm run test-routes

Breakpoint:
npm run test-routes-brk

---

## mocha
Mocha is the library that allows us to run tests, and Chai contains some helpful functions that we'll use to verify our test results

https://mochajs.org/
https://mochajs.org/#installation
- npm install --global mocha
- npm install --save-dev mocha
- npm i chai

## chai
* (Good tutorial)[https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/]
* (NPM)[https://www.chaijs.com/api/bdd/]




---

# Supertest
[npm testing module Supertest](https://visionmedia.github.io/superagent/)

---

# Mongo
Mongo is a NoSql document store. What does that mean? Mongo is a data store, it's a basket that you can save JSON. Once you use the Mongo DB you are inside the "REPL" (Read, Evaluate, print, loop).
### Relational vs Non-relational Data stores
Relational databases like MySQL represent and store data in tables and rows. ... Meanwhile, non-relational databases like MongoDB represent data in collections of JSON documents.

### Running
- Staring a MongoDB shell by opening a terminal, run: "mongod" without the "b".
output: "MongoDB starting : pid=30257 port=27017 dbpath=/data/db 64-bit host=SuperUser500s-MacBook-Pro.local"

- open a new terminal (leave ^ running) and run: mongo

#### You now can run commands:
- showing your DB: "show bds"
- Creating DB:  "use --name of db--"
- Creating a collection: "db.createCollection('lions')"
- Adding to collection: "db.lions.insert({"name":"hussein", "pride":"the hibity", "gender": "male"});"
- Finding: "db.todos.find()"

#### Robo T3
Is a GUI for your MongoDB

#### Mongoose
Mongoose is a ORM (Object-Relational Mapping) library that help setting up the communication of your programming lang and the Database.
So MongoDB is a DB (programming lang agnostic), Mongoose is a Node NPM that helps connect w/ that MongoDB.

Some benefits of Mongoose: add support for things like promises, allow us to model our data with schemas, allow us to establish relationships with our models, and so much more.

### Installing
https://github.com/mongodb/homebrew-brew
-brew tap mongodb/brew
-brew install mongodb-community@4.2
[Create a folder for the db:](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
- sudo mkdir -p /data/db
- sudo chown -R `id -un` /data/db


---

# getting your IP address:
in terminal
curl ifconfig.me

---
# Chrome Inspect URL
chrome://inspect/#devices
node --inspect-brk server/server

# Node error
npm install erring out: permission denied, rmdir 'build'
fix: "sudo npm install -g --unsafe-perm"


# Deployment
### All majors platforms support it these days and adhere to conventions to smooth the process even more. Some things to consider when deploying:
- Use envs for secrets, dont't check them into source control
- Make sure you are error handling
- Make sure all your dependencies are being installed
- If you're going to have your platform build for you, make sure it has access to all your build tools
- You can freeze node modules by using npm shrinkwrap
- Don't hard code things like dev urls, db urls, ports, etc
