# Use node.js official image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to working directory (package.json is were the dependencies are mentioned)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 3000

# Start app when the container is made
CMD ["npm", "start"]
