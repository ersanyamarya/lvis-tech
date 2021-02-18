import React, { useReducer } from 'react'
import tw, { styled } from 'twin.macro'
import { keyframes } from '@emotion/core'
import colors from './colors'
import { useContacts, useAsset } from '../hooks'
import Image from 'gatsby-image'
interface Action {
  type: string
  field?: string
  value?: string
  status?: string
}

interface FormState {
  name: string
  email: string
  message: string
  status: string
}

const loading = keyframes`
  from {
    opacity:1;
    transform: scale(0.001)
  }
  to {
    opacity:0;
    transform: scale(1)
  }
`
const ContactForm = styled.div`
  ${tw` p-8 py-16 lg:flex`}

  background-color:${colors.baseDark};
  color: ${colors.accent};

  &.form-pending {
    ${tw`relative`}
  }
  &.form-pending::before {
    ${tw`h-full w-full absolute m-0 p-0 opacity-75`}
    background-color: ${colors.accent};
    border-radius: 0.25rem;
    content: '';
    top: 0;
    left: 0;
  }
  &.form-pending::after {
    ${tw`absolute`}
    animation: ${loading} 1s ease-out infinite;
    background: radial-gradient(#883B465A, #EE3B465A);
    border-radius: 50%;
    content: '';
    height: 10rem;
    width: 10rem;
    left: calc(50% - 5rem);
    top: calc(50% - 5rem);
  }
  }
`
const Button = styled.button`
  ${tw`mt-8 px-10 py-4 shadow-lg rounded-lg text-lg w-full font-bold`}
  background-color:${colors.primary};
  color: ${colors.accent};
`
const Input = styled.input`
  ${tw`w-full p-6 appearance-none mb-4 text-base shadow-lg rounded-lg`}
  color: ${colors.accent};
`
const TextArea = styled.textarea`
  ${tw`w-full p-6 appearance-none mb-4 text-base shadow-lg rounded-lg`}
  color: ${colors.accent};
`
const Title = styled.h2`
  ${tw`py-3 m-0  text-center font-bold `}
`
const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  message: '',
  status: 'IDLE',
}

const reducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case 'updateFieldValue':
      return { ...state, [action.field]: action.value }
    case 'updateStatus':
      return { ...state, status: action.status }

    case 'reset':
    default:
      return INITIAL_STATE
  }
}

export default function Contacting(): JSX.Element {
  const contact = useContacts()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setStatus = status => dispatch({ type: 'updateStatus', status })
  const callImage = useAsset('Call').fluid
  const mailImage = useAsset('Mail').fluid
  const addressImage = useAsset('Address').fluid
  const updateFieldValue = field => event => {
    dispatch({ type: 'updateFieldValue', field, value: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setStatus('PENDING')

    fetch('/api/booking', { method: 'POST', body: JSON.stringify(state) })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setStatus('SUCCESS')
      })
      .catch(error => {
        console.error(error)
        setStatus('ERROR')
      })
  }
  if (state.status === 'SUCCESS') {
    return (
      <ContactForm>
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <span tw="cursor-pointer" onClick={() => dispatch({ type: 'reset' })}>
            <svg tw=" m-auto" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="2" y="2" width="76" height="76" rx="38" fill="#D9E1FF" stroke="#413973" strokeWidth="3" />
              <path
                d="M23 42L31.5858 50.5858C32.3668 51.3668 33.6332 51.3668 34.4142 50.5858L56 29"
                stroke="#413973"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <Title>Thank You for reaching out!</Title>
          <p tw="text-xl text-center block">
            {' '}
            Thanks for your interest in Lvistech. One of our representatives will get in touch with you soon.
          </p>
        </div>
      </ContactForm>
    )
  }
  return (
    <>
      <div tw="pt-16" id="contact-section"></div>

      <ContactForm className={state.status === 'PENDING' ? 'form-pending' : ''}>
        {state.status === 'ERROR' && (
          <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <p tw="text-xl text-center block text-red-400"> Some error while sending .. Try again {state.name}</p>
          </div>
        )}

        {state.status !== 'ERROR' && (
          <div tw="flex-1 px-2 lg:px-10 m-auto lg:px-32">
            <h1 tw="font-bold pb-10">
              Have an idea? <br /> Tell us about it!
            </h1>

            <p tw="flex pt-0 items-center">
              {/* <Image tw="w-12 h-12 mr-6" fluid={mailImage} /> */}
              <img tw="mr-6 w-10" src={mailImage.src} alt="mail image" />
              <span tw="m-0">
                <strong>Business:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <br />
                <strong>Career:</strong> <a href={`mailto:${contact.careerEmail}`}>{contact.careerEmail}</a>
              </span>
            </p>

            <p tw="flex pt-5 items-center">
              <img tw="mr-6 w-10" src={callImage.src} alt="call image" />

              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
            <p tw="flex pt-5 items-center">
              <img tw="mr-6 w-10" src={addressImage.src} alt="address image" />

              <a
                href="https://www.google.com/maps/place/Purva+Summit/@17.4532868,78.3684024,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb93c45446dfcf:0xe3c89d70db77622f!8m2!3d17.4532868!4d78.3705911"
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
              >
                {contact.address}
              </a>
            </p>
          </div>
        )}
        <form name="Booking" onSubmit={handleSubmit} tw="flex-1 px-2 pt-10 lg:px-32 lg:pt-0">
          <label htmlFor="name"></label>
          <Input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={updateFieldValue('name')}
          />
          <label htmlFor="email"></label>
          <Input
            required
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            onChange={updateFieldValue('email')}
          />

          <label htmlFor="message"></label>
          <TextArea required id="message" name="message" placeholder="Message" onChange={updateFieldValue('message')} />
          <Button type="submit">Submit</Button>
        </form>
      </ContactForm>
    </>
  )
}
