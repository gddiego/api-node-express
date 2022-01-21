<br />
<p align="center">
  <h2 align="center">Autor: Diego Mendes</h2>
</p>
<br />
<p align="center">
  <h2 align="center">Simple api-node express typescript with mysql</h2>
</p>
# API Demo

| Description        |    URL        | Method  |
| ------------- |:-------------:| -----:|
|  Get List course     | http://localhost:3000/courses | GET |
| Create course      | http://localhost:3000/courses      |   POST |
| Get a courses | http://localhost:3000/courses/:id      |    GET |
| Update a course | http://localhost:3000/courses/:id      |    PUT |
| Delete a course | http://localhost:3000/courses/:id      |    DELETE |


# Install Lib using in project
```
$ npm install --save express morgan
$ npm install --save-dev typescript @types/express nodemon ts-node @types/morgan mysql2 types/mysql2
```

# How to run 
```
$ git clone https://github.com/gddiego/api-node-express
$ npm install
$ npm run dev # run for developer
$ npm run build # run build for production
```

# Deploy 
```
$ npm run build
```
- Copy folder dist to server
```
$ node dist/index.js
```
