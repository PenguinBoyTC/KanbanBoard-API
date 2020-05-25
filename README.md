# KanbanBoard-API
 go to the project directory
 
 1. npm install
 2. npm run (Port: 5050) 
 
 docker:
 1. docker build -t <imagename> .
 2. docker run -it -p <hostport>:<containerport> (--name <showname> <imagename>) or <imagename> 
 3.(option) window need to add a .dockerignore file to avoid bcrypt error
 4. docker tag <IMAGE ID> <yourhubusername>/<REPOSITORY>:<tagname>
 5. docker push <yourhubusername>/<REPOSITORY>:<tagname>
