import { graphql, useStaticQuery } from 'gatsby'
import { Service } from './index'
import { Query } from '../types/generated'

export function useSections(): Service[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulSections(sort: { order: ASC, fields: index }) {
        nodes {
          id
          title
          slug
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

  return data.allContentfulSections.nodes.map(node => {
    return {
      id: node.id,
      featuredImage: node.featuredImage.fluid,
      title: node.title,
      slug: node.slug,
      description: node.description.description,
    }
  })
}
