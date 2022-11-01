#Get image from docker hub -> set workdir -> copy package(-lock).json fron host to container -> install all depend -> 
# -> copy other files exclude node_modules -> open port 3000 -> cmd 

FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


# we don't write port and cmd this, because manage state, this bad practise
# we run all env and command in docker compase
#EXPOSE 3000 
#CMD ["node", "run start"]
