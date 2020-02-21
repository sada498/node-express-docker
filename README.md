# Node-Express- Docker
 Clone the GIT repo into your local environment 
```
  git clone https://github.com/sada498/node-express-docker.git
  ```
change the directory 

 ```
 cd <your folder name>
 ```
To install the dependences 

 
        npm  init
           
  npm init 
 will download required node modules for the application 

 check the application working 
 
 
      node server.js


After node server running check on your local browser

     localhost:8080
     
Docker for desktop download depending upon your system requriments.
[Docker](https://www.docker.com/products/docker-desktop)


Dockerization your node-express application 

    docker build -t <your docker hub Id/node app name>
  
    docker build -t sada498/node-dockerapp .

**Note: Enter dot is so  . import end of the command to execute you docker build.
Check your docker images** 

    docker run -p 8080:8080 -d  <your docker hub Id/node app name>
    
You successfully dockerize your application.
To check the docker images 
 
    docker images ls
    
To check the list existing docker containers in running state. 

    docker ps
 
list existing docker containers

     docker container ls

 To stop the run container 
 
    docker container stop <container ID>
 
To remove the existing container

    docker container rm <container ID>
 
To remove the build images from docker

    docker image rm <image ID>
