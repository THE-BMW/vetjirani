# Start from a lightweight nginx image
FROM nginx:alpine

# Remove the default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files into nginx's public folder
COPY . /usr/share/nginx/html

# Expose the port nginx uses
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
