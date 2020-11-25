import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useServices } from '../../hooks'
import colors from '../colors'

const ServiceContainer = styled.div`
  ${tw`py-16 lg:px-10`}
  background-color: ${colors.accentLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Title = styled.p`
  ${tw`py-0 text-xl  m-0 text-center font-bold`}
`
const Body = styled.div`
  ${tw`m-0 pb-10 lg:pb-0 lg:flex text-base w-full flex flex-col`}
`

const Accord = styled.div`
  ${tw`py-2 px-4 lg:p-8 w-full m-5 sm:mx-1 lg:w-1/4 rounded-lg shadow-lg`}
  color:${colors.accent};
  background-color: ${colors.base};
`

export default function Services(): JSX.Element {
  const [services] = useState(useServices())
  return (
    <ServiceContainer>
      <div tw="flex justify-center">
        <h2 tw="text-4xl font-semibold mb-8 pb-4 border-b-4" style={{ borderColor: colors.accent }}>
          Our Services
        </h2>
      </div>
      <div tw="flex flex-wrap justify-evenly ">
        {services.map(service => {
          return (
            <Accord key={service.id}>
              <Body>
                <Image tw="m-auto w-40 mt-8 mb-4" fluid={service.featuredImage} />
                <Title>{service.title}</Title>
                <p tw="py-2 text-center">{service.description}</p>
              </Body>
            </Accord>
          )
        })}
      </div>
    </ServiceContainer>
  )
}
