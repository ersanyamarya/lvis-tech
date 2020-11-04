import React from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Layout, Services, MissionVison } from '../components'
import colors from '../components/colors'
import { useAsset } from '../hooks'
import { BigButtonWhite, BigButtonYellowShadow } from '../components/common'

const HeroImage = styled(Image)`
  ${tw` m-0 w-screen z-0 absolute`}
  height:80vh;
`

const HeroContent = styled.div`
  ${tw`z-50 absolute top-0 left-0 text-white m-auto  p-4 lg:py-20 lg:px-64`}
  height:40vh;
  color: ${colors.baseLight};
`

export default function Home(): JSX.Element {
  const heroImage = useAsset('Services-Hero')

  return (
    <Layout>
      <div tw="relative">
        <HeroImage fluid={heroImage.fluid} />
        <HeroContent>
          <h1 tw="m-0 text-3xl lg:text-6xl w-screen lg:w-3/4 font-bold">
            Transformation <br /> through Disruptive Technologies
          </h1>

          <div tw="py-6">
            <BigButtonWhite to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              LEARN MORE
            </BigButtonWhite>

            <BigButtonYellowShadow tw="m-8" to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              CONTACT US
            </BigButtonYellowShadow>
          </div>
        </HeroContent>
      </div>
      <MissionVison />
      <Services />
      {/* <Process />
      <Why />
      <Testimonials />
      
      <Booking />
      <ContactUs />
      <Faq /> */}
    </Layout>
  )
}
