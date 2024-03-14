#
# --- Stage 1: Build ---
#

FROM node:lts as build
RUN corepack enable

# Install dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml tsconfig.json ./
RUN pnpm install --frozen-lockfile

# Copy files
COPY . .

# Build & optimize a bit
RUN pnpm run production

#
# --- Stage 2: Run ---
#

FROM ghcr.io/wisemen-digital/vue-base:latest as final

COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/.env.example /etc/import-meta-env/example