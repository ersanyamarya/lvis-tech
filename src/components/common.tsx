import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'
import colors from './colors'

export const BigButtonYellowShadow = styled(Link)`
  ${tw`px-5 py-4 md:px-16 text-center rounded-lg text-lg md:text-xl font-bold my-auto shadow-lg my-2`}
  background-color: ${colors.primary};
  color: ${colors.accent};
`
export const BigButtonYellow = styled.div`
  ${tw`px-5 py-4 md:px-16 text-center rounded-lg text-lg md:text-xl font-bold my-auto cursor-pointer`}
  background-color: ${colors.primary};
  color: ${colors.accent};
`
export const BigButtonWhite = styled.div`
  ${tw`px-5 py-4 md:px-16 text-center rounded-lg text-lg md:text-xl font-bold my-auto cursor-pointer`}
  background-color: ${colors.base};
  color: ${colors.accent};
`
