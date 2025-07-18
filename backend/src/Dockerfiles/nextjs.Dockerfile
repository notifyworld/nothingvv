FROM node:18-alpine

RUN apk add --no-cache curl bash

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Clone the Soul Next.js template repository
RUN curl -L https://github.com/ntegrals/soul-nextjs-template/archive/main.tar.gz | tar -xz && \
    mv soul-nextjs-template-main my-nextjs-app

WORKDIR /app/my-nextjs-app

RUN bun install

EXPOSE 3001

CMD ["bun", "dev"]