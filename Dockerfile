FROM node:8.3.0

RUN npm install -g gulp

RUN useradd jenkins --shell /bin/bash --create-home
USER jenkins