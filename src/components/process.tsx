import React, { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import colors from './colors'
import Section from './home_page/section'

const ProcessCard = styled.div`
  ${tw`p-5 m-3 rounded-lg text-center block 
  lg:flex lg:text-left justify-between  `}
  color:${colors.accent};
  background-color: ${colors.baseLight};
  box-shadow: 0px 0px 20px rgba(54, 56, 66, 0.15);
`

const Step = styled.p`
  ${tw`text-sm lg:text-xl p-3 m-2 bg-gray-200 rounded`}
`

export default function Process(): JSX.Element {
  const [largeScreen, setLargeScreen] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLargeScreen(window.matchMedia('(min-width: 1020px)').matches)
    }
  })
  const Frame = styled.iframe`
    ${tw`my-5 mx-auto`}
    width:${largeScreen ? '36rem' : '19rem'};
    height: ${largeScreen ? '20rem' : '11rem'};
  `
  return (
    <Section title="Our Process">
      <ProcessCard>
        <div tw="lg:m-auto">
          <h2 tw=" font-bold my-5 text-base lg:text-2xl">YourPhysio Online Physiotherapy</h2>
          <Step>Step 1: TeleConsultation</Step>
          <Step>Step 2: Live Treatment Session</Step>
          <Step>Step 3: Monitor Progress via App</Step>
        </div>
        <Frame
          src="https://www.youtube.com/embed/kQXJHbJ-CXQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Frame>
      </ProcessCard>
    </Section>
  )
}
