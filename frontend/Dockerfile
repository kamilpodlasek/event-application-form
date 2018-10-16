FROM event-application-form-common:latest as common
FROM node:carbon

WORKDIR /app/frontend
COPY package*.json ./
COPY --from=common /app/common/ ./common
RUN npm install
COPY . .
