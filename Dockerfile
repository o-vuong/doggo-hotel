# Dockerfile for Doggo Hotel Backend

# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application and generate Prisma client
RUN pnpm run build
RUN pnpm prisma generate

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app ./

EXPOSE 3000

CMD [ "pnpm", "start" ] 