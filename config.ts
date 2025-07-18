// Soul Configuration File
// Configure your AI provider and default settings here

export type AIProvider = "openai" | "claude" | "ollama" | "gemini" | "groq" | "openrouter";
export type Framework = "nextjs" | "react" | "php" | "nuxtjs" | "flutter" | "express" | "django" | "rust";

export const config = {
  // AI SDK Configuration
  aiSdk: {
    // Active provider - change this to switch between providers
    provider: "openrouter" as AIProvider,
    
    // Provider configurations
    providers: {
      openai: {
        baseUrl: "https://api.openai.com/v1",
        apiKey: "sk-...", // Replace with your OpenAI API key
        model: "gpt-4",
        temperature: 0.7,
      },
      
      claude: {
        baseUrl: "https://api.anthropic.com",
        apiKey: "sk-ant-...", // Replace with your Anthropic API key
        model: "claude-3-sonnet-20240229",
        temperature: 0.7,
      },
      
      ollama: {
        baseUrl: "http://localhost:11434/v1",
        apiKey: "ollama", // Placeholder for local Ollama
        model: "llama2",
        temperature: 0.7,
      },
      
      gemini: {
        baseUrl: "https://generativelanguage.googleapis.com/v1beta",
        apiKey: "AIza...", // Replace with your Google API key
        model: "gemini-pro",
        temperature: 0.7,
      },
      
      groq: {
        baseUrl: "https://api.groq.com/openai/v1",
        apiKey: "gsk_...", // Replace with your Groq API key
        model: "llama3-8b-8192",
        temperature: 0.7,
      },
      
      openrouter: {
        baseUrl: "https://openrouter.ai/api/v1",
        apiKey: "sk-or-v1-...", // Replace with your OpenRouter API key
        model: "anthropic/claude-3-sonnet",
        temperature: 0.7,
      },
    },
  },
  
  // Framework Configuration
  frameworks: {
    // Default framework for new projects
    default: "nextjs" as Framework,
    
    // Available frameworks
    available: [
      "nextjs",
      "react", 
      "php",
      "nuxtjs",
      "flutter",
      "express",
      "django",
      "rust"
    ] as Framework[],
  },
  
  // Project Configuration
  project: {
    name: "Soul",
    version: "1.0.0",
    defaultPort: 3000,
  },
} as const;

// Helper function to get active AI configuration
export function getActiveAIConfig() {
  const provider = config.aiSdk.provider;
  return config.aiSdk.providers[provider];
}