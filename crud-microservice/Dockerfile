FROM node:14.15.3

RUN mkdir -p /usr/src/todo-crud-service

WORKDIR /usr/src/todo-crud-service

COPY . .

RUN npm install
RUN npm run build
EXPOSE 3000

CMD [ "npm", "run", "start" ]
