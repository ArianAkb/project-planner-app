# === STAGE 1: Build the React App ===
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first to leverage Docker's caching mechanism
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the production-ready static files
RUN npm run build

# === STAGE 2: Serve the App with Nginx ===
FROM nginx:1.25-alpine

# Copy the compiled static files from Stage 1 to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]