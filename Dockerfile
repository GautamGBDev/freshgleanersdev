# Use an official Node.js image as the base image
FROM node:20-alpine
 
# Set the working directory inside the container
WORKDIR /usr/src/app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the app's source code to the container
COPY . .
 
# Expose the port the app runs on
EXPOSE 3000
 
# Define the environment variable for production
ENV NODE_ENV=dev
 
# Build the Hydrogen app (if required)
RUN npm run build
 
# Start the Hydrogen app
CMD ["npm", "run", "start"]