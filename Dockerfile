FROM node:9.11.1

WORKDIR /portals
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
