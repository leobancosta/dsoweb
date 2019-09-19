FROM node:12.9.0-stretch AS builder

COPY . ./dso-ui

WORKDIR /dso-ui

RUN ["npm","install"]

ENTRYPOINT ["npm","start"]