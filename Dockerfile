FROM node:18
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
ENTRYPOINT ["http-server" ,"dist"]
