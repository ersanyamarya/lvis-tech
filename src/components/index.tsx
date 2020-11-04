import tw, { styled } from 'twin.macro'
import Layout from './layout'
import { Services, Why, Faq, Physiotherapists, Section, MissionVison } from './home_page'
import ContactUs from './contact-us'
import Testimonials from './testimonials'
import Booking from './bookingForm'
const Container = styled.div`
  ${tw`mx-6 sm:mx-auto sm:w-10/12`}
`

export {
  Layout,
  Container,
  ContactUs,
  Services,
  Why,
  MissionVison,
  Faq,
  Physiotherapists,
  Section,
  Booking,
  Testimonials,
}
