import { graphql, useStaticQuery } from 'gatsby'
import { Service } from './index'
import { Query } from '../types/generated'

export function useContacts(): any {
  const data: Query = useStaticQuery(graphql`
    query {
      allContentfulContact {
        nodes {
          id
          address
          email
          phone
          careerEmail
        }
      }
    }
  `)

  return data.allContentfulContact.nodes.map((node, index) => {
    return {
      id: node.id,
      address: node.address,
      email: node.email,
      phone: node.phone,
      careerEmail: node.careerEmail,
    }
  })[0]
}
