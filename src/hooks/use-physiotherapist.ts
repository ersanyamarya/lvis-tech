import { graphql, useStaticQuery } from 'gatsby'
import { Physiotherapist } from './index'
import { Query } from '../types/generated'

export function usePhysiotherapists(): Physiotherapist[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulPhysiotherapist {
        nodes {
          name
          slug
          id
          title
          place
          line1
          line2
          featuredImage {
            fluid {
              aspectRatio
              base64
              sizes
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
  return data.allContentfulPhysiotherapist.nodes.map(node => ({
    id: node.id,
    featuredImage: node.featuredImage.fluid,
    title: node.title,
    name: node.name,
    slug: node.slug,
    place: node.place,
    line1: node.line1,
    line2: node.line2,
  }))
}
