# Use Bun's official image
FROM oven/bun:1.0

# Set working directory
WORKDIR /app

# Copy entire project
COPY . .

# Install dependencies for backend and frontend
RUN cd backend && bun install && \
    cd ../frontend && bun install

# Default command (will be overridden by docker-compose)
CMD ["bun", "run", "start"]
