import { useServices } from './use-services'
import { useMissionVision } from './use-mission-vision'
import { useContacts } from './use-contacts'
import { useAsset } from './use-asset'
import { UseSiteMeata } from './use-site-meta'
interface User {
  email: string
  facebook: string
  twitter: string
  title: string
  phone: string
  name: string
  linkedin: string
  image: any
}

interface Post {
  id: string
  title: string
  slug: string
  description: string
  tags: string[]
  category: string[]
  featuredImage: any
  twitterDescription?: string
  body?: string
  author?: User
}

interface Service {
  id: string
  title: string
  slug: string
  description?: string
  longDescription?: string
  featuredImage?: any
  flip: boolean
}

interface StaticPage {
  id: string
  title: string
  slug: string
  body?: any
}

interface Why {
  id: string
  name: string
  slug: string
  description: string
  featuredImage?: any
}

interface Faq {
  id: string
  name: string
  slug: string
  description: string
  expand?: boolean
}

interface Physiotherapist {
  id: string
  name: string
  slug: string
  title: string
  place: string
  line1: string
  line2: string
  featuredImage: any
}

interface Testimonial {
  id: string
  name: string
  slug: string
  title: string
  problem: string
  body: any
  featuredImage: any
}

interface File {
  fluid: any
  id: string
  title: string
}
export { useServices, useAsset, useMissionVision, UseSiteMeata, useContacts }
export type { Post, User, Service, StaticPage, Why, Faq, Physiotherapist, File, Testimonial }
