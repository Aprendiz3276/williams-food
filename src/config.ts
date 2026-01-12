/**
 * Application Configuration
 * All environment variables should be accessed through this file
 */

export const config = {
  // API Configuration
  api: {
    url: import.meta.env.VITE_API_URL || 'https://api.williamsfood.com',
  },

  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Williams Food',
    version: '0.0.1',
  },

  // Environment
  environment: import.meta.env.VITE_ENVIRONMENT || 'development',
  isDevelopment: import.meta.env.MODE === 'development',
  isProduction: import.meta.env.MODE === 'production',

  // Domain Configuration
  domain: import.meta.env.VITE_DOMAIN || 'williamsfood.local',
} as const;

export type Config = typeof config;
