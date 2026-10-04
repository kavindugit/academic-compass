import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://academic-compass-az3yfwidp-kavindus-projects-a09fba5a.vercel.app').replace(/\/$/, '')
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${baseUrl}/sitemap.xml` }
}
