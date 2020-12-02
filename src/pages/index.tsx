import React from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Layout, Services, MissionVison, WhoAreWe, Contacting } from '../components'
import colors from '../components/colors'
import { useAsset } from '../hooks'
import { BigButtonWhite, BigButtonYellow } from '../components/common'
import { Sections } from '../components/home_page'

const HeroImage = styled(Image)`
  ${tw` m-0 w-screen z-0 absolute`}
  height:80vh;
`

const HeroContent = styled.div`
  ${tw`z-50 absolute top-0 left-0 text-white w-screen
  lg:w-3/4 p-4 mt-16 lg:py-16 lg:px-56`}
  height:40vh;
  color: ${colors.baseLight};
`

export default function Home(): JSX.Element {
  const heroImage = useAsset('hero-image')
  // const [formDone, setFormDone] = useState(true)
  return (
    // <div tw="relative">
    //   <div tw="absolute">
    <Layout>
      <div tw="relative">
        <HeroImage fluid={heroImage.fluid} />
        <HeroContent>
          <h1 tw="m-0 mt-10 sm:mt-0 text-4xl lg:text-6xl font-bold">Transformation through Disruptive Technologies</h1>
          <div tw="flex justify-between flex-col m-0 lg:mt-8 lg:flex-row">
            <BigButtonWhite tw="my-6 lg:m-0 " to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              LEARN MORE
            </BigButtonWhite>
            <div tw="m-0 sm:w-10"></div>
            <BigButtonYellow to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
              CONTACT US
            </BigButtonYellow>
            <div tw="flex-1"></div>
          </div>
        </HeroContent>
      </div>
      <MissionVison />
      <Services />
      <WhoAreWe />
      {/* <Sections /> */}
      <Contacting />
    </Layout>
    //   </div>
    //   <div tw="absolute h-screen w-screen z-50 bg-red-300">
    //     <h1>Sanyam</h1>
    //   </div>
    // </div>
  )
}
