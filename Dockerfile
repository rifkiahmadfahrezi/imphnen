# Install dependencies only when needed
FROM node:23-slim AS base

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable pnpm

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the application
FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# Production image, copy only necessary files
FROM node:23-slim AS runner

ENV NODE_ENV=production

# Enable pnpm
RUN corepack enable pnpm

WORKDIR /app

# Copy built assets and production deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json

EXPOSE 3004

CMD ["pnpm", "start", "-p", "3004"]
