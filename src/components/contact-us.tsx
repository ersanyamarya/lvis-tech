import React from 'react'
import tw, { styled } from 'twin.macro'
import { Section } from '.'
import Image from 'gatsby-image'
import { useAsset } from '../hooks'

import colors from './colors'
const Text = styled.p`
  ${tw` m-0  text-center  text-lg`}
  color:${colors.accent}
`
const TextDark = styled.p`
  ${tw` m-0  text-center text-lg font-bold`}
  color:${colors.accent}
`
const ContactCard = styled.div`
  ${tw`px-3 pb-5 flex flex-col text-center flex-1 justify-center w-5/12 m-auto`}
  color:${colors.accent};
`

export default function ContactUs(): JSX.Element {
  const one = useAsset('time')
  const two = useAsset('calendar')

  return (
    <Section title="Our Details">
      <div tw="flex">
        <ContactCard>
          <Image tw="mx-auto w-24 inset-auto mb-6 block" fluid={one.fluid} />
          <Text> Contact us at </Text>
          <TextDark>960-778-8718 </TextDark>
          <TextDark> &nbsp;</TextDark>
        </ContactCard>
        <ContactCard>
          <Image tw="mx-auto w-24 inset-auto mb-6 block" fluid={two.fluid} />
          <Text>We&apos;re available!</Text>
          <TextDark> 8 AM - 9 PM</TextDark>
          <TextDark> 7 days every week</TextDark>
        </ContactCard>
      </div>
    </Section>
  )
}
