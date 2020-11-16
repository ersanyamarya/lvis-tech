import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useServices } from '../../hooks'
import colors from '../colors'

const ServiceContainer = styled.div`
  ${tw`py-16 lg:px-20`}
  background-color: ${colors.accentLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Title = styled.p`
  ${tw`py-4 text-lg m-0 text-center font-bold`}
`
const Body = styled.div`
  ${tw`m-0 pb-10 lg:pb-0 lg:flex text-base w-full flex flex-col`}
`

const Accord = styled.div`
  ${tw`p-2 lg:p-8 w-full m-5 lg:w-1/4 rounded-lg shadow-lg`}
  color:${colors.accent};
  background-color: ${colors.base};
`

export default function Services(): JSX.Element {
  const [services] = useState(useServices())
  return (
    <ServiceContainer>
      <h2 tw="text-4xl text-center">Our Services</h2>
      <div tw="flex flex-wrap justify-around ">
        {services.map(service => {
          return (
            <Accord key={service.id}>
              <Body>
                <Image tw="m-auto w-32 my-4" fluid={service.featuredImage} />
                <Title>{service.title}</Title>
                <p tw="py-4 text-center">{service.description}</p>
              </Body>
            </Accord>
          )
        })}
      </div>
    </ServiceContainer>
  )
}
