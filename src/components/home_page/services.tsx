import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useServices } from '../../hooks'
import Section from './section'
import { keyframes } from '@emotion/core'
import { Link } from 'gatsby'

const appear = keyframes`
  from {opacity:0} to {
    opacity:100
  }
`

const Title = styled.p`
  ${tw`py-4 text-lg m-0 text-left uppercase`}
  &.collapseTitle {
    ${tw`lg:w-32`}
  }
`
const Body = styled.div`
  ${tw`m-0 pb-10 lg:pb-0 lg:flex text-base w-full`}
  animation: ${appear} 0.6s ease 1;
  &.invisibleBody {
    ${tw` h-0 py-0 lg:w-0`}
  }
  &.invisibleBody > * {
    ${tw`invisible`}
  }
`

const Accord = styled.div`
  ${tw`cursor-pointer px-6 lg:p-8`}
  &:first-of-type {
    ${tw`rounded-t-lg lg:rounded-none lg:rounded-l-lg`}
  }
  &:last-of-type {
    ${tw`rounded-b-lg lg:rounded-none lg:rounded-r-lg`}
  }
`

export default function Services(): JSX.Element {
  const [services, setServices] = useState(useServices())
  return (
    <Section title="Our Services">
      <div tw="mx-5 shadow-xl rounded-lg lg:flex ">
        {services.map(service => {
          const { color, backgroundColor } = service
          return (
            <Accord
              onClick={() => {
                services.forEach(e => {
                  if (e.id === service.id) e.expand = true
                  else e.expand = false
                })
                setServices([...services])
              }}
              key={service.id}
              style={{ backgroundColor, color, margin: 0 }}
            >
              <Title className={service.expand ? '' : 'collapseTitle'}>{service.name}</Title>
              <Body className={service.expand ? '' : 'invisibleBody'}>
                <Image
                  tw="overflow-hidden lg:ml-4 my-0 lg:flex-1 lg:max-w-sm w-4/5 lg:w-full lg:order-2"
                  fluid={service.featuredImage}
                />

                <div tw="lg:flex-1 text-sm lg:text-base lg:order-1">
                  <p tw="mb-8">{service.description}</p>
                  <Link
                    tw="px-8 py-3 border rounded font-bold"
                    style={{ borderColor: color }}
                    to={`/services/${service.slug}`}
                  >
                    Learn More
                  </Link>
                </div>
              </Body>
            </Accord>
          )
        })}
      </div>
    </Section>
  )
}
