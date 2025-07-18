FROM node:18-alpine

RUN apk add --no-cache curl bash

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Create a new React app with Vite
RUN bunx create-vite my-react-app --template react-ts

WORKDIR /app/my-react-app

RUN bun install

EXPOSE 5173

CMD ["bun", "run", "dev", "--host", "0.0.0.0"]