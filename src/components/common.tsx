import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import colors from './colors'

export const BigButtonYellowShadow = styled(Link)`
  ${tw`px-5 py-3 md:px-16  border rounded-lg text-lg md:text-xl font-bold my-auto shadow-lg my-2`}
  background-color: ${colors.primary};
  color: ${colors.accent};
`
export const BigButtonYellow = styled(Link)`
  ${tw`px-5 py-3 md:px-16  border rounded-lg text-lg md:text-xl font-bold my-auto`}
  background-color: ${colors.primary};
  color: ${colors.accent};
`
export const BigButtonWhite = styled(Link)`
  ${tw`px-5 py-3 md:px-16  border rounded-lg text-lg md:text-xl font-bold my-auto`}
  background-color: ${colors.base};
  color: ${colors.accent};
`
