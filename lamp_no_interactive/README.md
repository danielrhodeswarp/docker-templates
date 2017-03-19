desc:

simple LAMP setup

it does:

- have a php webserver (apache)
- mysql and pdo extensions for php
- have a mariadb server (visible to the webserver)

it does not:

- have an interactive shell for server / php commands
- support multiple php docroots (just points to /var/www/html)


instructions:

- "docker-compose up" brings up the MariaDB container and the PHP webserver (Apache) container
    *in the foreground*. use "docker compose up -d" to run containers in background.

- go to http://localhost:80 to see PHP's phpinfo() page
- go to http://localhost:80/adminer.php and connect to MariaDB with server=danielrhodeswarp-lamp-headless-mariadb, user=root, password=secret