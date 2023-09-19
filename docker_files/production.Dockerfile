FROM node:16.14.2-alpine3.15 AS builder
WORKDIR /usr/src/app
ARG VERSION
ENV REACT_APP_VERSION=$VERSION
COPY ../app/ .
RUN npm install
RUN npm run build


FROM nginx:1.23.1-alpine
COPY ../config/nginx_config.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000