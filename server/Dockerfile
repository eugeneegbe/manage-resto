FROM node:18
WORKDIR /app-server
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]
