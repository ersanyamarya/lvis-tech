import React, { useState, useEffect } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import colors from './colors'
import NavRoute from './navigationRoutes'

import { useServices } from '../hooks'
import { BigButtonYellowShadow } from './common'

const Navbar = styled.header`
  ${tw`flex items-center w-screen  p-6 px-2 lg:px-6 lg:justify-between shadow-xl m-0 z-10`}
  background-color: ${colors.base};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`
const TitleButton = styled.button`
  ${tw`cursor-pointer lg:hidden `}
  &.invisibleButton {
    display: none;
  }
`

const NavigationView = styled.nav`
  ${tw`w-screen h-screen flex-col justify-center m-0 z-10  items-center inset-0 fixed flex
  transition-all duration-200 ease-in-out
  lg:block lg:static lg:inset-auto lg:h-auto lg:w-auto lg:bg-transparent lg:mr-10 lg:visible`}
  /* transition-all ease-in-out duration-500 */
  background-color: ${colors.accentDark};
  &.visibleNav {
    ${tw`flex `}/* ${tw`opacity-100 h-screen justify-center m-0`} */
  }

  &.invisibleNav {
    ${tw` w-0 py-0`}
  }
  &.invisibleNav > * {
    ${tw`invisible`}
  }
`

const ChildNav = styled.div`
  ${tw`flex flex-col items-center
  lg:absolute lg:px-10 lg:py-5 h-0 lg:h-auto rounded-lg lg:shadow m-0 
  transition-all lg:duration-200 ease-in-out invisible`}
  background-color: ${colors.accentDark};
  & > * {
    ${tw`text-xl p-2 m-0`}
  }
  &:hover {
    ${tw`lg:h-auto lg:visible`}
  }

  &.visibleChildNav {
    ${tw`h-auto visible`}
  }
`

const NavLink = styled(Link)`
  ${tw`p-3 text-2xl md:text-lg`}
  color: ${colors.baseLight};
  text-decoration: none;
  &.current-page {
    ${tw`font-bold`}
    color: ${colors.accent};
  }
  &:hover {
    color: ${colors.accent};
  }
`

const NavLinkContainer = styled.div`
  ${tw`flex lg:inline-block m-0 p-0`}
  &:hover + div {
    ${tw`lg:h-auto lg:visible`}
  }
`
const Icon = styled.svg`
  ${tw`m-auto transition-all duration-200 ease-in-out lg:invisible cursor-pointer`}

  &.rotate {
    transform: rotateX(180deg);
  }
`
export default function Navigation(): JSX.Element {
  const [services] = useState(useServices())
  const [visible, setVisibility] = useState(false)
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(min-width: 770px)').matches) {
      setVisibility(true)
    }
  })

  return (
    <Navbar>
      <TitleButton
        onClick={() => {
          setVisibility(!visible)
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M2 12H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M2 21H22" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </TitleButton>
      <Link tw="h-8 ml-2 lg:ml-4 my-auto" to="/">
        <img tw="h-8" src={'/logo.svg'} alt="" />
      </Link>

      <TitleButton
        className={visible ? 'right-corner' : 'invisibleButton'}
        onClick={() => {
          setVisibility(!visible)
          setExpanded(false)
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L21 21M21 1L1 21" stroke="#FBFBFB" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </TitleButton>
      <div tw="flex-none md:flex-1"></div>

      <NavigationView className={visible ? '' : 'invisibleNav'}>
        {/* <NavRoute to="/" setVisibility={setVisibility}>
          About Us
        </NavRoute> */}

        {/* 
        <NavLinkContainer>
          <NavLink
            to="/services"
            activeClassName="current-page"
            onClick={() => {
              setVisibility(false)
            }}
          >
            Services
          </NavLink>

          <Icon
            className={expanded ? '' : 'rotate'}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setExpanded(!expanded)}
          >
            <path
              d="M1 7L6.29289 1.70711C6.68342 1.31658 7.31658 1.31658 7.70711 1.70711L13 7"
              stroke="#fefefe"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Icon>
        </NavLinkContainer>

        <ChildNav className={expanded ? 'visibleChildNav' : ''}>
          {services.map(service => (
            <NavRoute key={service.id} to={`/services/${service.slug}`} setVisibility={setVisibility}>
              {service.name}
            </NavRoute>
          ))}
        </ChildNav> */}
      </NavigationView>

      <div tw="flex-1 lg:flex-none"></div>
      <BigButtonYellowShadow to="#booking-section" onClick={() => scrollTo(`#booking-section`)}>
        CONTACT US
      </BigButtonYellowShadow>
    </Navbar>
  )
}
