FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y python-software-properties software-properties-common
RUN apt-add-repository ppa:chris-lea/node.js
RUN apt-get update

RUN apt-get install -y git

RUN apt-get install -y ruby

RUN gem install sass

RUN apt-get install -y nodejs

RUN npm install -g grunt-cli 
RUN npm install -g bower 

COPY . /var/paz-fit2

RUN cd /var/paz-fit2 && npm install
RUN cd /var/paz-fit2 && bower --allow-root install
RUN cd /var/paz-fit2 && grunt

ENTRYPOINT /var/paz-fit2/docker-entrypoint

EXPOSE 9001
