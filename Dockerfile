FROM node:20-slim AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Copy workspace config
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/shared/package.json packages/shared/
COPY apps/api/package.json apps/api/

# Install dependencies (skip lifecycle scripts to avoid Prisma issues)
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source
COPY packages/shared/ packages/shared/
COPY apps/api/ apps/api/

# Build shared package then API
RUN pnpm --filter shared build && pnpm --filter api build

# Run
EXPOSE 3001
CMD ["node", "apps/api/dist/index.js"]
