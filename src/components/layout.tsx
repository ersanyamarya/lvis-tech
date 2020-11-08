import React from 'react'
import { Global, css } from '@emotion/core'
import Navigation from './navigation'
import tw, { styled } from 'twin.macro'
import Footer from './footer'
import colors from './colors'
import SEO from './SEO'

const Main = styled.main`
  ${tw`m-0 z-0`}
`
interface Props {
  children: JSX.Element | any
}
export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <SEO />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          * + * {
            margin-top: 1rem;
          }
          body::-webkit-scrollbar {
            display: none;
          }
          body: {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          html,
          body {
            ${tw`m-0 w-screen h-screen p-0 `}
            font-size:16px;
            font-family: 'Open Sans', sans-serif;
            background-color: #fff;
            color: ${colors.accent};
          }
          .avatar {
            ${tw`my-auto ml-auto block rounded-full`}
            height:5rem;
            width: 5rem;
          }
          h1 {
            ${tw`text-3xl sm:text-6xl`}
          }
          h2 {
            ${tw`text-xl`}
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
          }
          p {
            /* ${tw`mt-2 mb-2`} */
          }
          strong {
          }
          .right-corner {
            position: absolute;
            margin: 2rem;
            right: 0;
            z-index: 100;
          }
          li {
            margin-top: 0.25rem;
          }
          img {
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
