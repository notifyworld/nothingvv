FROM node:18-alpine

RUN apk add --no-cache curl bash

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Create a new Nuxt.js app
RUN bunx nuxi@latest init my-nuxt-app

WORKDIR /app/my-nuxt-app

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev", "--host", "0.0.0.0"]