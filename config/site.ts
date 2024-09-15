export const siteConfig = {
  imageURL: process.env.PUBLIC_NEXT_IMAGE_URL,
  name: process.env.PUBLIC_NEXT_NAME,
  url: '',
  ogImage: '',
  description: '',
  links: {
    twitter: 'https://x.com/',
    github: 'https://github.com/',
  },
  email: process.env.PUBLIC_NEXT_EMAIL,
};

export type SiteConfig = typeof siteConfig;
