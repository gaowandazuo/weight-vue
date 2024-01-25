FROM gi-docker.repo.inspur.com/nginx:1.25.2-alpine
WORKDIR /etc/nginx
COPY ./dist /usr/share/nginx/wwwroot/html
EXPOSE 80

