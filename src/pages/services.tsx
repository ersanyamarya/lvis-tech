import React from 'react'
import { Layout, Services, ContactUs, Booking, Testimonials } from '../components'
import tw, { styled } from 'twin.macro'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Image from 'gatsby-image'
import colors from '../components/colors'
import { useAsset } from '../hooks'

const HeroImage = styled(Image)`
  ${tw` m-0 w-screen z-0 absolute`}
  height:45vh;
`
const Button = styled.button`
  ${tw`mt-10 px-10 py-3 font-bold text-lg lg:px-10 lg:py-3 rounded-md lg:text-lg`}
  background-color:${colors.baseLight};
  color: ${colors.primary};
`
const HeroContent = styled.div`
  ${tw`z-50 absolute top-0 left-0 text-white m-auto w-screen p-4 lg:py-20 lg:px-64`}
  height:40vh;
`
export default function Service(): JSX.Element {
  const heroImage = useAsset('Services-Hero')
  return (
    <Layout>
      <div tw="relative">
        <HeroImage fluid={heroImage.fluid} />
        <HeroContent>
          <h1 tw="m-0 text-3xl lg:text-5xl">240+ Conditions Treated</h1>
          <p tw="text-lg lg:text-xl">
            With a team of experienced doctors and Physiotherapists, we can treat a wide variety of pain and rehab
            issues.
          </p>
          <Button onClick={() => scrollTo(`#booking-section`)}>Book Now</Button>
        </HeroContent>
      </div>

      <Services />
      <Testimonials />
      <Booking />
      <ContactUs />
    </Layout>
  )
}
