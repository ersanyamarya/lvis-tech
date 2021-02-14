import { graphql, useStaticQuery } from 'gatsby'
import { Experience } from './index'

export function useExperience(): Experience[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulExperience(sort: { order: ASC, fields: index }) {
        nodes {
          id
          title
          body
        }
      }
    }
  `)

  return data.allContentfulExperience.nodes.map(node => {
    return {
      id: node.id,
      title: node.title,
      body: node.body,
    }
  })
}
