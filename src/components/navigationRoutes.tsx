import React, { Dispatch, SetStateAction } from 'react'
import tw, { styled } from 'twin.macro'
import colors from './colors'
import { Link } from 'gatsby'
// md:opacity-100
// md:block md:w-auto md:h-auto
interface NavRouteProps {
  children: string
  to: string
  setVisibility: Dispatch<SetStateAction<boolean>>
}

const NavLink = styled(Link)`
  ${tw`p-3 text-2xl md:text-2xl`}
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

export default function NavRoute({ children, to, setVisibility }: NavRouteProps): JSX.Element {
  return (
    <NavLink
      to={to}
      activeClassName="current-page"
      onClick={() => {
        setVisibility(false)
      }}
    >
      {children}
    </NavLink>
  )
}
