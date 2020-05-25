# Use a lighter version of Node as a parent image
FROM node:current-slim
# Set the working directory to /KanbanBoard-API
WORKDIR /KanbanBoard-API
# copy package.json into the container at /KanbanBoard-API
COPY package.json /KanbanBoard-API/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /KanbanBoard-API
COPY . /KanbanBoard-API/
# Make port 5050 available to the world outside this container
EXPOSE 5050
# Run the app when the container launches
CMD ["npm", "start"]