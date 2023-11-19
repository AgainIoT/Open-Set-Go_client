import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.open-set-go.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // { // not exist yet
    //   url: "https://www.open-set-go.com/about",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
