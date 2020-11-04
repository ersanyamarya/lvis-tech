import tw, { styled } from 'twin.macro'
import Layout from './layout'
import Process from './process'
import { Services, Why, Faq, Physiotherapists, Section } from './home_page'
import ContactUs from './contact-us'
import Testimonials from './testimonials'
import Booking from './bookingForm'
const Container = styled.div`
  ${tw`mx-6 sm:mx-auto sm:w-10/12`}
`

export { Layout, Container, ContactUs, Services, Why, Process, Faq, Physiotherapists, Section, Booking, Testimonials }
