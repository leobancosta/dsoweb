FROM node:12.9.0-stretch AS builder
COPY . ./dso-ui
WORKDIR /dso-ui
RUN npm install
RUN npm install @angular/cli
RUN npm run ng build --prod

FROM nginx:1.17.3
COPY --from=builder /dso-ui/dist/dso-ui /usr/share/nginx/html