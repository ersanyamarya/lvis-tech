import React, { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'
import { usePhysiotherapists } from '../../hooks'
import colors from '../colors'
import Section from './section'
import { keyframes } from '@emotion/core'

const appear = keyframes`
  from {opacity:0} to {
    opacity:100
  }
`

const PhysiotherapistCard = styled.div`
  ${tw`px-6 py-2 lg:p-6  flex rounded-lg shadow-xl my-auto w-full lg:w-2/5`}
  color:${colors.accent};
  background-color: ${colors.primaryLight};
  margin-left: 5vw;
  margin-right: 5vw;
  min-height: 14rem;
  animation: ${appear} 0.6s ease 1;
  }
`

const CardCase = styled.div`
  ${tw`relative`}
`
const ArrowButton = styled.button`
  ${tw`px-3 py-4 rounded-full shadow-xl`}
  background-color: ${colors.baseLight};
`

export default function Physiotherapists(): JSX.Element {
  const [largeScreen, setLargeScreen] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') setLargeScreen(window.matchMedia('(min-width: 768px)').matches)
  })
  const physios = usePhysiotherapists()
  const [pIndex, setPIndex] = useState(0)
  const [physiotherapist, setPhysiotherapist] = useState(physios[0])
  function rightArrow() {
    let index = pIndex + 1
    if (index === physios.length) index = 0
    setPIndex(index)
    setPhysiotherapist(physios[index])
  }
  function leftArrow() {
    let index = pIndex - 1
    if (index === -1) index = physios.length - 1
    setPIndex(index)
    setPhysiotherapist(physios[index])
    // }
  }

  return (
    <Section title="Expert Physiotherapists serving across India">
      <CardCase>
        <div tw="flex justify-between my-24 px-1 absolute z-10 w-full">
          <ArrowButton onClick={leftArrow}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 5.5H1M1 5.5L6 0.5M1 5.5L6 10.5"
                stroke="#56637B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowButton>
          <ArrowButton onClick={rightArrow}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 5.5L16 5.5M16 5.5L11 10.5M16 5.5L11 0.5"
                stroke="#56637B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowButton>
        </div>
        <div tw="flex justify-start ">
          <PhysiotherapistCard key={physiotherapist.id}>
            <div tw="max-w-xs  text-sm ">
              <p tw="font-bold ">{physiotherapist.name}</p>
              <p tw="mb-6">{physiotherapist.title}</p>
              <p tw="mb-2">{physiotherapist.line1}</p>
              <p tw="">{physiotherapist.line2}</p>
            </div>
            <Image className="avatar" fluid={physiotherapist.featuredImage} alt={physiotherapist.name} />
          </PhysiotherapistCard>
          {largeScreen && pIndex <= physios.length - 2 && (
            <>
              <div tw="flex-1"></div>
              <PhysiotherapistCard key={physios[pIndex + 1].id}>
                <div tw="max-w-xs text-sm">
                  <p tw="font-bold  ">{physios[pIndex + 1].name}</p>
                  <p tw="mb-6">{physios[pIndex + 1].title}</p>
                  <p tw="mb-2">{physios[pIndex + 1].line1}</p>
                  <p tw="">{physios[pIndex + 1].line2}</p>
                </div>
                <Image className="avatar" fluid={physios[pIndex + 1].featuredImage} alt={physios[pIndex + 1].name} />
              </PhysiotherapistCard>
            </>
          )}
        </div>
      </CardCase>
    </Section>
  )
}
