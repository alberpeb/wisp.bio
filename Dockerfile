FROM node:18

WORKDIR /wisp.bio

COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npx prisma migrate
ENTRYPOINT ["npm", "run"]