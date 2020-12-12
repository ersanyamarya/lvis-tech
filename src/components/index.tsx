import tw, { styled } from 'twin.macro'
import Layout from './layout'
import { Services, MissionVison, WhoAreWe } from './home_page'
import Contacting from './contactingForm'
import Building from './buildForm'
const Container = styled.div`
  ${tw`mx-6 sm:mx-auto sm:w-10/12`}
`

export { Layout, Container, Services, MissionVison, WhoAreWe, Contacting, Building }
