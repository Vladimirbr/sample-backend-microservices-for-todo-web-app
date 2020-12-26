# sample-backend-microservices-for-todo-web-app

## Sample exmple for micriservices backend server for TODO web app

Crud-microservice - microservice for TODO CRUD operation (has simple functionalities that will help users create, edit and delete todos), written with nodejs, express, mongoose and typescript.

Notifier-microservice - microservice that has a simple notification logic that sends to the users notifications regarding todos reaching their deadlines, written with nodejs, express and typescript, sending notification one time per day.

#### I assump that all data that sended to the service is valid.

## API Examples

#### Get all todo's

```
GET -> http://localhost:3000/api/v1/todos
```

#### Create new todo

```
POST -> http://localhost:3000/api/v1/todos
{
"task": "task1",
"description" : "new task1",
"date": "2020-12-29"
}
```

#### Edit todo by id

```
PUT -> http://localhost:3000/api/v1/todos/<todo id>
{
"task": "task1",
"description" : "new task",
"date": "2020-12-25",
"done": true
}
```

#### Delete todo by id

```
DELETE -> http://localhost:3000/api/v1/todos/<todo id>
```

## Deployment

Application use dockers and for run it use docker-compose.
