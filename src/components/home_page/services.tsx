import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useServices } from '../../hooks'
import colors from '../colors'

const ServiceContainer = styled.div`
  ${tw`py-20`}
  background-color: ${colors.accentLight};
`

const Title = styled.p`
  ${tw`py-4 text-lg m-0 text-left text-center`}
  &.collapseTitle {
    ${tw`lg:w-32`}
  }
`
const Body = styled.div`
  ${tw`m-0 pb-10 lg:pb-0 lg:flex text-base w-full flex flex-col`}
`

const Accord = styled.div`
  ${tw`cursor-pointer px-6 lg:p-8 w-1/4 m-4`}
  color:${colors.accent};
  background-color: ${colors.base};
`

export default function Services(): JSX.Element {
  const [services] = useState(useServices())
  return (
    <ServiceContainer>
      <h2 tw="text-4xl text-center">Our Services</h2>
      <div tw="flex flex-wrap justify-center">
        {services.map(service => {
          return (
            <Accord key={service.id}>
              <Body>
                <Image tw="my-0" fluid={service.featuredImage} />
                <Title>{service.name}</Title>
                <p tw="mb-8">{service.description}</p>
              </Body>
            </Accord>
          )
        })}
      </div>
    </ServiceContainer>
  )
}
