# Frontend Dockerfile

# Build environment
FROM node:18 as build
WORKDIR /app

COPY package.json .

RUN npm --force install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]
