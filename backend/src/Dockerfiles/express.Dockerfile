FROM node:18-alpine

RUN apk add --no-cache curl bash

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /app

# Create Express app structure
RUN mkdir my-express-app
WORKDIR /app/my-express-app

# Initialize package.json
RUN echo '{\n\
  "name": "soul-express-app",\n\
  "version": "1.0.0",\n\
  "description": "Soul Express Application",\n\
  "main": "server.js",\n\
  "scripts": {\n\
    "start": "node server.js",\n\
    "dev": "nodemon server.js"\n\
  },\n\
  "dependencies": {\n\
    "express": "^4.18.2",\n\
    "cors": "^2.8.5"\n\
  },\n\
  "devDependencies": {\n\
    "nodemon": "^3.0.1"\n\
  }\n\
}' > package.json

# Create basic Express server
RUN echo 'const express = require("express");\n\
const cors = require("cors");\n\
\n\
const app = express();\n\
const PORT = process.env.PORT || 3000;\n\
\n\
app.use(cors());\n\
app.use(express.json());\n\
\n\
app.get("/", (req, res) => {\n\
  res.json({ message: "Welcome to Soul Express App!" });\n\
});\n\
\n\
app.listen(PORT, "0.0.0.0", () => {\n\
  console.log(`Server running on port ${PORT}`);\n\
});' > server.js

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev"]