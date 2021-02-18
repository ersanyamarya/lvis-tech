import React from 'react'
import tw, { styled } from 'twin.macro'
import { useAsset, useExperience } from '../../hooks'
import BackgroundImage from 'gatsby-background-image'
import colors from '../colors'

const WhoSection = styled.div`
  ${tw`relative sm:pb-64 mt-0`}
`
const Title = styled.div`
  ${tw`p-20 text-center sm:pb-64 sm:mb-32`}
  background-image: url("https://images.ctfassets.net/3379nviw0swj/2mR91fWA7tZT0su1HtW32r/d714a950d35a9dd059ecf48c3a8bfeef/careers-image-1.jpg");
  & h1 {
    ${tw`font-bold text-4xl sm:text-6xl text-center
    sm:mt-20 `}
    color: ${colors.baseLight};
  }
`
const Body = styled.div`
  ${tw`sm:flex justify-evenly my-0 sm:px-5
  py-12 sm:py-16 sm:text-xl sm:shadow-xl sm:absolute inset-x-0 bottom-44 sm:mx-24 z-0`}
  background-color: ${colors.primaryLight};
`
const Mail = styled.div`
  ${tw`text-center p-10 sm:shadow-xl sm:mx-auto sm:w-1/3 my-0 
  text-2xl z-50 sm:absolute inset-x-0 bottom-28`};
  background-color: ${colors.baseDark};
`

export default function WorkAtLvisTech(): JSX.Element {
  const careerImage = useAsset('careers-image').fluid
  const experiences = useExperience()

  return (
    <>
      <div tw="pt-0 mt-0 pb-10" id="experience-section"></div>
      <WhoSection>
        <Title>
          <h1>Work at LvisTech</h1>
        </Title>

        <Body>
          {experiences.map(experience => {
            return (
              <div tw="px-5 sm:py-5 m-0 mx-5 w-64" key={experience.id}>
                <h2 tw="font-bold mb-4">{experience.title}</h2>
                {experience.body.split('.').map(b => {
                  return (
                    <>
                      <p>{b}</p>
                      <br />
                    </>
                  )
                })}
              </div>
            )
          })}
        </Body>
        <Mail>
          <span>Send your resumes to </span>
          <br />
          <a href="mailto: careers@lvistech.com" tw="font-bold">
            careers@lvistech.com
          </a>
        </Mail>
      </WhoSection>
    </>
  )
}
