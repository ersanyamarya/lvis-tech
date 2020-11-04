import React, { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import Image from 'gatsby-image'

import { useTestimonials } from '../hooks'
import colors from './colors'
import { Section } from '.'
import { keyframes } from '@emotion/core'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const appear = keyframes`
  from {opacity:0} to {
    opacity:100
  }
`

const CardCase = styled.div`
  ${tw`relative`}
`
const ArrowButton = styled.button`
  ${tw`px-3 py-4 rounded-full  shadow-xl h-12 w-12`}
  background-color: ${colors.baseLight};
  top: calc(50% - 1.5rem);
`
const ArrowCase = styled.div`
  ${tw`flex justify-between absolute z-10 w-full`}
  top: calc(50% - 1.5rem);
`
export default function Testimonials(): JSX.Element {
  const [largeScreen, setLargeScreen] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLargeScreen(window.matchMedia('(min-width: 1020px)').matches)
    }
  })
  const TestimonialCard = styled.div`
  ${tw`px-8 py-10 rounded-lg shadow-xl m-0`}
  color:${colors.accent};
  background-color: ${colors.accentLight};
  flex-basis: ${largeScreen ? '30%' : '90%'};
  animation: ${appear} 0.6s ease 1;
}
`

  const testimonials = useTestimonials()
  const [pIndex, setPIndex] = useState(0)
  const rightArrow = () => {
    if (largeScreen) {
      let index = pIndex + 3
      if (index >= testimonials.length - 2) index = 0
      setPIndex(index)
    } else {
      let index = pIndex + 1
      if (index === testimonials.length) index = 0
      setPIndex(index)
    }
  }
  const leftArrow = () => {
    if (largeScreen) {
      let index = pIndex - 3
      if (index <= -1) index = testimonials.length - 3
      setPIndex(index)
    } else {
      let index = pIndex - 1
      if (index === -1) index = testimonials.length - 1
      setPIndex(index)
    }
  }

  return (
    <Section title="Our Patients">
      <CardCase>
        <ArrowCase>
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
        </ArrowCase>
        <div tw="flex justify-around " style={{ alignItems: 'stretch' }}>
          <TestimonialCard key={testimonials[pIndex].id}>
            {documentToReactComponents(testimonials[pIndex].body)}
            <div tw="mt-6">
              <div tw="text-sm float-left w-40">
                <p tw="font-bold">{testimonials[pIndex].name}</p>
                <p tw="">{testimonials[pIndex].title}</p>
                <p tw="">( {testimonials[pIndex].problem} )</p>
              </div>
              <Image
                tw="w-20 h-20 float-right"
                className="avatar"
                fluid={testimonials[pIndex].featuredImage}
                alt={testimonials[pIndex].name}
              />
            </div>
          </TestimonialCard>

          {largeScreen && (
            <TestimonialCard key={testimonials[pIndex + 1].id}>
              {documentToReactComponents(testimonials[pIndex + 1].body)}
              <div tw="mt-6 flex justify-between">
                <div tw="text-sm float-left w-40">
                  <p tw="font-bold">{testimonials[pIndex + 1].name}</p>
                  <p tw="">{testimonials[pIndex + 1].title}</p>
                  <p tw="">( {testimonials[pIndex + 1].problem} )</p>
                </div>
                <Image
                  tw="w-20 h-20 float-right"
                  className="avatar"
                  fluid={testimonials[pIndex + 1].featuredImage}
                  alt={testimonials[pIndex + 1].name}
                />
              </div>
            </TestimonialCard>
          )}
          {largeScreen && (
            <TestimonialCard key={testimonials[pIndex + 2].id}>
              {documentToReactComponents(testimonials[pIndex + 2].body)}
              <div tw="mt-6 flex justify-between">
                <div tw="text-sm float-left w-40">
                  <p tw="font-bold">{testimonials[pIndex + 2].name}</p>
                  <p tw="">{testimonials[pIndex + 2].title}</p>
                  <p tw="">( {testimonials[pIndex + 2].problem} )</p>
                </div>
                <Image
                  tw="w-20 h-20 float-right"
                  className="avatar"
                  fluid={testimonials[pIndex + 2].featuredImage}
                  alt={testimonials[pIndex + 2].name}
                />
              </div>
            </TestimonialCard>
          )}
        </div>
      </CardCase>
    </Section>
  )
}
