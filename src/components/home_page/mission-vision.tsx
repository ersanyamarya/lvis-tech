import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { useMissionVision } from '../../hooks'
import colors from '../colors'

const Mission = styled.div`
  ${tw`p-16 px-10  lg:w-2/5 flex flex-col items-center mx-4 lg:m-0 text-center`}
  color:${colors.accent};
  background-color: ${colors.accentLight};
`

const Vision = styled.div`
  ${tw`p-16 px-10 lg:w-2/5 flex flex-col items-center mx-4 lg:m-0 text-center `}
  color:${colors.accent};
  background-color: ${colors.primaryLight};
`

export default function MissionVison(): JSX.Element {
  const [missionVision] = useState(useMissionVision())

  return (
    <div tw="py-24 flex justify-center flex-col lg:flex-row">
      {/* <HeroImage fluid={heroImage.fluid} /> */}

      <Vision>
        <h2 tw="text-4xl pb-3 font-semibold mb-8 border-b-4" style={{ borderColor: colors.accent }}>
          {missionVision[0].title}
        </h2>
        <Image tw="m-auto w-40" fluid={missionVision[0].featuredImage} />

        <p tw="mt-8 text-xl">{missionVision[0].description}</p>
      </Vision>
      <Mission>
        <h2 tw="text-4xl pb-3 font-semibold mb-8 border-b-4" style={{ borderColor: colors.accent }}>
          {missionVision[1].title}
        </h2>
        <Image tw="m-auto w-40" fluid={missionVision[1].featuredImage} />

        <p tw="mt-8 text-xl">{missionVision[1].description}</p>
      </Mission>
    </div>
  )
}
