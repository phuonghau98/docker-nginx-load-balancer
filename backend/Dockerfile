FROM node:latest
LABEL USMA PHUONGHAU
RUN mkdir -p /usr/src/awesomeapp
WORKDIR /usr/src/awesomeapp
COPY . .
RUN npm install
CMD [ "node", "app.js" ]
EXPOSE 3000