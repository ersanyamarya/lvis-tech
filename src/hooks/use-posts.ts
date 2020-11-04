import { graphql, useStaticQuery } from 'gatsby'
import { Post } from './index'
import { Query } from '../types/generated'

export function usePosts(): Post[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          id
          slug
          title
          publishDate
          tags
          category
          description {
            description
          }
          featuredImage {
            fluid {
              sizes
              aspectRatio
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
  return data.allContentfulBlogPost.nodes.map(node => ({
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    slug: node.slug,
    description: node.description.description,
    tags: node.tags,
    category: node.category,
  }))
}
