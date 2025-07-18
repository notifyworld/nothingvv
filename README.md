<a name="readme-top"></a>

<div align="center">

<h3 align="center">Say hi to Soul ☃️</h3>

  <p align="center">
    Soul is an open-source alternative to AI-powered development platforms like Loveable, Replit, and Bolt that you can run locally with your own API keys, ensuring complete privacy and significant cost savings. 
    <br />
    <br />
    Soul lets you build full-stack applications from simple text prompts using AI across multiple frameworks.
    <br />
    <br />
    <a href="#get-started">Get started</a>
    ·
    <a href="https://github.com/ntegrals/soul/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/ntegrals/soul/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=">Request Feature</a>

  </p>
</div>
<a href="https://github.com/ntegrals/soul">
    <img src=".assets/preview.png" alt="Soul Preview">
  </a>

## Features

    ✅ AI-powered project creation from natural language prompts
    ✅ Multi-framework support (Next.js, React, PHP, Nuxt.js, Flutter, and more)
    ✅ Multiple AI model providers (OpenAI, Claude, Ollama, Gemini, Groq)
    ✅ Containerized applications with Docker
    ✅ Live preview with mobile and desktop views
    ✅ Full-featured Monaco code editor with file management
    ✅ Real-time chat assistant for development help
    ✅ Project export and deployment capabilities
    ✅ Configurable AI models and frameworks

## Supported Frameworks

    🚀 Next.js - Full-stack React framework
    ⚛️ React.js - Frontend library with Vite
    🐘 PHP - Server-side scripting with Apache
    💚 Nuxt.js - Vue.js framework
    📱 Flutter - Cross-platform mobile development
    🔥 Express.js - Node.js web framework
    🐍 Django - Python web framework
    🦀 Rust + Actix - High-performance web services

## Supported AI Models

    🤖 OpenAI (GPT-4, GPT-3.5-turbo)
    🧠 Anthropic Claude (Claude-3, Sonnet-4)
    🦙 Ollama (Local LLMs)
    💎 Google Gemini
    ⚡ Groq (Fast inference)
    🌐 OpenRouter (Multiple models)

## Get started

1. Clone the repo

   ```sh
   git clone https://github.com/ntegrals/soul
   ```

2. Configure your AI provider in `config.ts`:

   ```typescript
   export const config = {
     aiSdk: {
       // Choose your provider
       provider: "openai", // "openai" | "claude" | "ollama" | "gemini" | "groq" | "openrouter"
       
       // Provider-specific configuration
       openai: {
         baseUrl: "https://api.openai.com/v1",
         apiKey: "sk-...",
         model: "gpt-4",
       },
       claude: {
         baseUrl: "https://api.anthropic.com",
         apiKey: "sk-ant-...",
         model: "claude-3-sonnet-20240229",
       },
       ollama: {
         baseUrl: "http://localhost:11434/v1",
         model: "llama2",
       },
       // ... more providers
     },
     
     // Default framework for new projects
     defaultFramework: "nextjs", // "nextjs" | "react" | "php" | "nuxtjs" | "flutter" | "express" | "django"
   };
   ```

3. Install Docker and start the application:

   ```sh
   sh start.sh
   ```

4. Access Soul at [http://localhost:3000](http://localhost:3000) 🥳

## Why Soul?

- **Multi-Framework Freedom** - Build with your preferred stack
- **AI Model Choice** - Use any AI provider you prefer
- **Complete Privacy** - Everything runs locally
- **Cost Effective** - Pay only for your API usage
- **No Vendor Lock-in** - Own your code and infrastructure

## Contact

Questions? Reach out at j.schoen@mail.com or [@julianschoen](https://twitter.com/julianschoen)

## License

Distributed under the MIT License. See `LICENCE` for more information.