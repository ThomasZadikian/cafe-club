School project for my graduation.

If you decide to clone this project, remember to run npm install in order to install the necessary dependencies.

For do work this project, you need to have the secret (inside a .env) who conatins jwt key and database informations. You can craete your own, the back folders contain a copy of the deploiement script for the database and the post deploiement script (using this, you don't have images for the products, as a base x64 longchar contain, i can't and won't include them inside the post deploiement script)

To launch this project, you can use docker-compose up in a terminal but without the secret, the API will not work.
