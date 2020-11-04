import { usePosts } from './use-posts'
import { useServices } from './use-services'
import { useWhys } from './use-whys'
import { useFaqs } from './use-faqs'
import { usePhysiotherapists } from './use-physiotherapist'
import { useTestimonials } from './use-testimonials'
import { useAsset } from './use-asset'
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
  name: string
  slug: string
  description?: string
  featuredImage?: any
  body1?: any
  body2?: any
  heroImage?: any
  expand?: boolean
  backgroundColor?: string
  color?: string
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
export { usePosts, useServices, useWhys, useFaqs, usePhysiotherapists, useTestimonials, useAsset }
export type { Post, User, Service, StaticPage, Why, Faq, Physiotherapist, File, Testimonial }
