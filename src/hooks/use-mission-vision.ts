import { graphql, useStaticQuery } from 'gatsby'
import { Service } from './index'
import { Query } from '../types/generated'

export function useMissionVision(): Service[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulMissionVision(sort: { order: ASC, fields: index }) {
        nodes {
          title
          slug
          id
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

  return data.allContentfulMissionVision.nodes.map((node, index) => {
    return {
      id: node.id,
      featuredImage: node.featuredImage.fluid,
      title: node.title,
      slug: node.slug,
      description: node.description,
    }
  })
}
