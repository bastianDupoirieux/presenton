export interface LLMConfig {
  LLM?: string;

  // OpenAI
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;

  // Google
  GOOGLE_API_KEY?: string;
  GOOGLE_MODEL?: string;

  // Anthropic
  ANTHROPIC_API_KEY?: string;
  ANTHROPIC_MODEL?: string;

  // Ollama
  OLLAMA_URL?: string;
  OLLAMA_MODEL?: string;

  // Custom LLM
  CUSTOM_LLM_URL?: string;
  CUSTOM_LLM_API_KEY?: string;
  CUSTOM_MODEL?: string;

  //Azure OpenAI
  AZUREOPENAI_URL?: string;
  AZUREOPENAI_API_VERSION?: string;
  AZUREOPENAI_API_KEY?: string;
  AZUREOPENAI_MODEL?: string;
  AZUREOPENAI_DEPLOYMENT?: string;

  // Image providers
  DISABLE_IMAGE_GENERATION?: boolean;
  IMAGE_PROVIDER?: string;
  PEXELS_API_KEY?: string;
  PIXABAY_API_KEY?: string;

  // Other Configs
  TOOL_CALLS?: boolean;
  DISABLE_THINKING?: boolean;
  EXTENDED_REASONING?: boolean;
  WEB_GROUNDING?: boolean;

  // Only used in UI settings
  USE_CUSTOM_URL?: boolean;
}
