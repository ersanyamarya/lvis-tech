import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { useSections } from '../../hooks'
import colors from '../colors'
import Image from 'gatsby-image'

const ServiceContainer = styled.div`
  ${tw`py-16 lg:px-10 static`}
  background-color: ${colors.accentLight};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const Bar = styled.div`
  ${tw`flex m-0 mx-auto justify-center cursor-pointer`}

  & > h2 {
    ${tw`md:text-2xl text-lg text-center font-semibold p-2 md:px-24 md:py-6 border`}
    background-color: ${colors.baseLight};
  }

  & > h2:hover {
    background-color: ${colors.base};
  }

  & > h2.selected {
    background-color: ${colors.primaryLight};
    color: ${colors.accent};
  }
`

const Body = styled.div`
  ${tw`flex flex-col md:flex-row justify-around md:mx-32 mt-10 mb-0 p-0`}
  -webkit-animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-fwd-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  & > p {
    ${tw`m-auto flex-1 p-0 md:pl-32 pl-4 order-1 md:order-2 text-xl`}
  }

  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
`

export default function Sections(): JSX.Element {
  const [sections] = useState(useSections())
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <ServiceContainer>
      <Bar>
        {sections.map((section, index) => (
          <h2
            className={index === currentIndex ? 'selected' : ''}
            key={section.id}
            onClick={() => setCurrentIndex(index)}
          >
            {section.title}
          </h2>
        ))}
      </Bar>
      <Body>
        <Image tw="flex-1 m-0 mx-10 p-0 order-2 md:order-1" fluid={sections[currentIndex].featuredImage} />
        <p>{sections[currentIndex].description}</p>
      </Body>
    </ServiceContainer>
  )
}
