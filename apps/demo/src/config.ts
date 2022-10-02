const IS_PRODUCTION = import.meta.env['IS_PRODUCTION'] === 'true';
const IS_OFFLINE = import.meta.env['IS_OFFLINE'] === 'true';
const GREETING_ENDPOINT =
  import.meta.env['GREETING_ENDPOINT'] ?? 'http://localhost:8080';

export const site = {
  name: 'Bean Counter',

  origin: 'https://bean-counter-v0.vercel.app',
  basePathname: '/demo',

  title: 'Bean Counter',
  description:
    'This page provides a simple smoke test to verify our backend API is accessible from the edge. Check the console log for detailed request info.',
};

export const environment = {
  production: IS_PRODUCTION,
  offline: IS_OFFLINE,
  greetingEndpoint: GREETING_ENDPOINT,
};
