FROM node:carbon
ARG task
ENV task ${task}

WORKDIR /app/common
COPY common/package*.json ./
RUN npm install
COPY common .

WORKDIR /app/frontend
CMD npm install && npm ${task}
