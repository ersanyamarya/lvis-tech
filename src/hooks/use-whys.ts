import { graphql, useStaticQuery } from 'gatsby'
import { Why } from './index'
import { Query } from '../types/generated'

export function useWhys(): Why[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulWhy(sort: { order: ASC, fields: createdAt }) {
        nodes {
          id
          slug
          name
          description
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

  return data.allContentfulWhy.nodes.map(node => {
    return {
      id: node.id,
      featuredImage: node.featuredImage.fluid,
      name: node.name,
      slug: node.slug,
      description: node.description,
    }
  })
}
