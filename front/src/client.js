import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'lxplmd4y', // this isnt working in .env file for some reason
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-11-05',
  token: process.env.SANITY_TOKEN,
});
