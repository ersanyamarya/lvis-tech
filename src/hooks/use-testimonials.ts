import { graphql, useStaticQuery } from 'gatsby'
import { Testimonial } from './index'
import { Query } from '../types/generated'

export function useTestimonials(): Testimonial[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulTestimonial {
        nodes {
          id
          name
          problem
          slug
          title
          childContentfulTestimonialMonologRichTextNode {
            json
          }
          featuredImage {
            fluid {
              aspectRatio
              sizes
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  `)
  return data.allContentfulTestimonial.nodes.map(node => ({
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    name: node.name,
    slug: node.slug,
    problem: node.problem,
    body: node.childContentfulTestimonialMonologRichTextNode.json,
  }))
}
