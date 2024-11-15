FROM ruby:latest

RUN apt-get update -qq && apt-get install -y \
    nodejs \
    freetds-dev \
    build-essential

RUN git config --global user.name "Alexis026-Ae"
RUN git config --global user.email "bily.alarcon@unas.edu.pe"

WORKDIR /usr/src/app

RUN gem install rails -v 7.0

EXPOSE 3000
