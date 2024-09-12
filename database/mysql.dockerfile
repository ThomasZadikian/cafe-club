FROM mysql:8.0
COPY ./cafe_club_dump.sql /docker-entrypoint-initdb.d/