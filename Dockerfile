FROM node:12.18-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
EXPOSE 5000
EXPOSE 3001
EXPOSE 1234
EXPOSE 4000
EXPOSE 7144
EXPOSE 31
EXPOSE 17
EXPOSE 22
EXPOSE 1
CMD node index.js