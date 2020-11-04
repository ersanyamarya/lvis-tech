import { graphql, useStaticQuery } from 'gatsby'
import { Service } from './index'
import { Query } from '../types/generated'
import { COLOR_SET } from '../components/colors'

export function useServices(): Service[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulService(sort: { order: ASC, fields: createdAt }) {
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

  return data.allContentfulService.nodes.map((node, index) => {
    if (index > COLOR_SET.length) index = index - COLOR_SET.length

    return {
      id: node.id,
      featuredImage: node.featuredImage.fluid,
      name: node.name,
      slug: node.slug,
      description: node.description,
      expand: index === 0,
      backgroundColor: COLOR_SET[index].backgroundColor,
      color: COLOR_SET[index].color,
    }
  })
}
