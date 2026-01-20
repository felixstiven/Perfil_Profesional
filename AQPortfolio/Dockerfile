# Use Node.js 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the application
RUN npm run build

# Expose port (Railway will set this via $PORT)
EXPOSE 3000

# Start command
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
