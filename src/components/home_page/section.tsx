import React from 'react'
import tw, { styled } from 'twin.macro'

import colors from '../colors'

const Title = styled.h2`
  ${tw` mt-16 mb-8 text-center text-xl lg:text-3xl font-semibold`}
  color:${colors.primary}
`
const HorizontalLine = styled.hr`
  ${tw`divide-solid divide-y-8 divide-gray-600`}
`
interface SectionProps {
  title: string
  border?: boolean
  children: any
  id?: string
}
export default function Section({ title, children, border = false, id = '' }: SectionProps): JSX.Element {
  let hr
  if (border) hr = <HorizontalLine />
  else hr = ''
  return (
    <section id={id} tw="my-12 lg:mx-auto lg:w-10/12">
      {hr}
      <Title>{title}</Title>

      {children}
    </section>
  )
}
