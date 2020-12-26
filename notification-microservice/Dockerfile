FROM node:14.15.3

RUN mkdir -p /usr/src/todo-notifier-service

WORKDIR /usr/src/todo-notifier-service

COPY . .

RUN npm install
RUN npm run build
EXPOSE 3001

CMD [ "npm", "run", "start" ]
