# Use official Nginx image (small, fast, production-ready)
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML/CSS files into the Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground (this is the default CMD)
CMD ["nginx", "-g", "daemon off;"]
