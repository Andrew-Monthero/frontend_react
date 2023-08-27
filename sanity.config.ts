import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'pmnqfg1u',
  dataset: 'production',
  title: 'Portfolio Website',
  apiVersion: '2023-08-26',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
