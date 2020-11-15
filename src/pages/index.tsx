import React from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Layout, Services, MissionVison, WhoAreWe, Booking } from '../components'
import colors from '../components/colors'
import { useAsset } from '../hooks'
import { BigButtonWhite, BigButtonYellow } from '../components/common'

const HeroImage = styled(Image)`
  ${tw` m-0 w-screen z-0 absolute`}
  height:80vh;
`

const HeroContent = styled.div`
  ${tw`z-50 absolute top-0 left-0 text-white w-screen
  lg:w-3/4 p-4 mt-32 lg:m-0 lg:py-20 lg:px-56`}
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
          <h1 tw="m-0 text-4xl lg:text-6xl font-bold">Transformation through Disruptive Technologies</h1>
          <div tw="flex justify-between flex-col lg:flex-row">
            <BigButtonWhite tw="my-6 lg:m-0 " to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              LEARN MORE
            </BigButtonWhite>

            <BigButtonYellow to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              CONTACT US
            </BigButtonYellow>
          </div>
        </HeroContent>
      </div>
      <MissionVison />
      <Services />
      <WhoAreWe />
      <Booking />

      {/* <Process />
      <Why />
      <Testimonials />
      
      <Booking />
      <ContactUs />
      <Faq /> */}
    </Layout>
  )
}
