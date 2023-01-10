FROM node:19-alpine
WORKDIR /app
COPY node/package.json ./
RUN npm install
COPY ./node ./
CMD ["npm", "run", "dev"]
