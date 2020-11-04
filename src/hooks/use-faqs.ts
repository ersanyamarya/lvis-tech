import { graphql, useStaticQuery } from 'gatsby'
import { Faq } from './index'
import { Query } from '../types/generated'

export function useFaqs(): Faq[] {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulFaq(sort: { order: ASC, fields: createdAt }) {
        nodes {
          name
          slug
          description
          id
        }
      }
    }
  `)

  return data.allContentfulFaq.nodes.map(node => {
    return {
      id: node.id,
      name: node.name,
      slug: node.slug,
      description: node.description,
      expand: false,
    }
  })
}
