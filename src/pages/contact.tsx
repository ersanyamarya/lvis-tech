import React from 'react'
import { Layout, Container } from '../components'
import tw, { styled } from 'twin.macro'
const Centre = styled.button`
  ${tw`text-center text-6xl`}
`
export default function Contact(): JSX.Element {
  return (
    <Layout>
      <Container>
        <div tw="h-screen flex justify-center">
          <Centre>Coming soon ...</Centre>
        </div>
      </Container>
    </Layout>
  )
}
