# Use a base image with Node.js and Python
FROM node:16-buster

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip

# Set up the application directory
WORKDIR /usr/src/app

# Copy package files and install Node.js dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5123

# Start the application
CMD ["node", "index.js"]
