import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    pluginReact(),
    // pluginModuleFederation({
    //   name: 'provider_app',
    //   exposes: {
    //     './App': './src/App.jsx',
    //   },
    //   shared: ['react', 'react-dom'],
    // }),
  ]
});
