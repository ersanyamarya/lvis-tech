import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'
const Container = styled.div`
  ${tw`mx-4 sm:mx-10 flex h-auto justify-center items-center flex-col`}
`
export default function Error(): JSX.Element {
  return (
    <Layout>
      <Container>
        <h1 tw="text-6xl ">404 </h1>
        <h2>Not Found</h2>
      </Container>
    </Layout>
  )
}
