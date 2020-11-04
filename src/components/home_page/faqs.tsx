import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { useFaqs } from '../../hooks'
import colors from '../colors'
import Section from './section'

const Title = styled.div`
  ${tw`p-6 w-full text-lg m-0 text-left flex justify-between cursor-pointer`}
  color:${colors.accentDark}
`
const Body = styled.div`
  ${tw`px-3 pb-5 m-0 flex text-base transition-all duration-200 ease-linear`}
  color:${colors.accent};

  &.invisibleBody {
    ${tw` h-0 py-0`}
  }
  &.invisibleBody > * {
    ${tw`invisible`}
  }
`
const Icon = styled.svg`
  ${tw`m-auto transition-all duration-200 ease-in-out`}

  &.rotate {
    transform: rotateX(180deg);
  }
`
const HorizontalLine = styled.hr`
  ${tw`divide-solid divide-y-8 divide-gray-600 m-0 p-0`}
`
export default function Faqs(): JSX.Element {
  const [faqs, setServices] = useState(useFaqs())
  return (
    <Section title="Frequently Asked Questions (FAQs)" border={true}>
      {faqs.map(faq => {
        return (
          <div key={faq.id}>
            <HorizontalLine />
            <Title
              onClick={() => {
                faqs.forEach(e => {
                  if (e.id === faq.id) e.expand = !faq.expand
                  else e.expand = false
                })
                setServices([...faqs])
              }}
            >
              <p tw="flex-1">{faq.name}</p>

              <Icon
                className={faq.expand ? '' : 'rotate'}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7L6.29289 1.70711C6.68342 1.31658 7.31658 1.31658 7.70711 1.70711L13 7"
                  stroke="#56637B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Icon>
            </Title>
            <Body className={faq.expand ? '' : 'invisibleBody'}>
              <p tw="px-4 m-0">{faq.description}</p>
            </Body>
          </div>
        )
      })}
    </Section>
  )
}
