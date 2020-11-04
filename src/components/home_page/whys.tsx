import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useWhys } from '../../hooks'
import colors from '../colors'
import Section from './section'

const WhyCard = styled.div`
  ${tw`px-3 pb-5 flex flex-col text-center  justify-center w-5/12 m-auto`}
  color:${colors.accent}
`

export default function Whys(): JSX.Element {
  const [whys] = useState(useWhys())

  return (
    <Section title="Why Online Physiotherapy">
      <div tw="flex flex-wrap sm:flex-no-wrap sm:flex-row">
        {whys.map(why => {
          const parts = why.description.split('.')
          return (
            <WhyCard key={why.id}>
              <Image tw="mx-auto w-24 inset-auto mb-6 block" fluid={why.featuredImage} />
              <p tw="font-bold text-sm lg:text-lg">{why.name}</p>

              <p tw="text-xs lg:text-sm ">{parts[0]}.</p>
              <p tw="text-xs lg:text-sm">{parts[1]}.</p>
            </WhyCard>
          )
        })}
      </div>
    </Section>
  )
}
