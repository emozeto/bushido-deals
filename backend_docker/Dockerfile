FROM       ubuntu:latest
MAINTAINER Marcin Zieliński <marcink.zielinski@gmail.com>

# Update apt-get sources AND install Python-dve
RUN apt-get update && apt-get install -yqq build-essential python-dev
RUN apt-get install -yqq python-setuptools
RUN apt-get install -yqq python-pip
RUN apt-get install -yqq nano
RUN apt-get install -yqq telnet
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update && apt-get install -y mongodb-org


## Flask Extensions
RUN pip install flask-wtf
RUN pip install flask-bootstrap
RUN pip install flask-pymongo
RUN pip install flask-mail
RUN pip install -U flask-cors



## Install a few other tools, nano, telnet and so on...
RUN apt-get install -y nano && apt-get install -y telnet

EXPOSE 5000

ENTRYPOINT ["/usr/bin/python" , "/app/app.py"]