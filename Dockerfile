from ubuntu:15.10
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-key update && apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential nodejs lirc python

RUN mkdir /app
COPY . /app
WORKDIR /app

ENV PATH "/app/node_modules/.bin:$PATH"

EXPOSE 8772
