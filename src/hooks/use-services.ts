import { graphql, useStaticQuery } from 'gatsby'
import { Service } from './index'
import { Query } from '../types/generated'

export function useServices(): Service[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulServices(sort: { order: ASC, fields: index }) {
        nodes {
          id
          title
          slug
          description
          longDescription {
            longDescription
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

  return data.allContentfulServices.nodes.map((node, index) => {
    return {
      id: node.id,
      featuredImage: node.featuredImage.fluid,
      title: node.title,
      slug: node.slug,
      description: node.description,
      longDescription: node.longDescription ? node.longDescription.longDescription : node.description,
      flip: false,
    }
  })
}
