FROM node:18

WORKDIR /wisp.bio

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npx prisma migrate
EXPOSE 3000
CMD [ "npm", "run", "start" ]