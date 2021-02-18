import { graphql, useStaticQuery } from 'gatsby'
import { File } from './index'
import { Query } from '../types/generated'

export function useAsset(name = 'safer'): File {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          fluid(quality: 100) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
          title
          id
        }
      }
    }
  `)

  let asset = data.allContentfulAsset.nodes.find(e => e.title === name)
  if (!asset || asset == null) asset = data.allContentfulAsset.nodes[0]
  return {
    id: asset.id,
    fluid: asset.fluid,
    title: asset.title,
  }
}
