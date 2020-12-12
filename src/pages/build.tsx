import React from 'react'
import { Layout, Container, Building } from '../components'
import tw, { styled } from 'twin.macro'
const Centre = styled.button`
  ${tw`text-center text-6xl`}
`
export default function About(): JSX.Element {
  return (
    <Layout>
      <Container>
        <div tw="h-screen flex justify-center">
          <Building />
        </div>
      </Container>
    </Layout>
  )
}
