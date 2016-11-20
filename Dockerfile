FROM nodesource/node:4.0

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE  8080

CMD node app.js