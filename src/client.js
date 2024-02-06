import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Access environment variables using import.meta.env
const projectId = import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_REACT_APP_SANITY_TOKEN

export const client = sanityClient({
  projectId,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
