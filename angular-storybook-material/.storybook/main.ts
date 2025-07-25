import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },

  webpackFinal: async (config) => {
    // Resolve DefinePlugin conflict with process.env.NODE_ENV
    const definePlugin = config.plugins?.find(
      (plugin: any) => plugin.constructor.name === 'DefinePlugin'
    ) as any;
    
    if (definePlugin && definePlugin.definitions) {
      // Remove conflicting NODE_ENV definition
      delete definePlugin.definitions['process.env.NODE_ENV'];
    }
    
    return config;
  }
};
export default config;