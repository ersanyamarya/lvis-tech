import React, { useReducer } from 'react'
import tw, { styled } from 'twin.macro'
import { keyframes } from '@emotion/core'
import colors from './colors'
import { useContacts } from '../hooks'

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

const BookingForm = styled.div`
  ${tw` p-8 lg:flex`}

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

export default function Booking(): JSX.Element {
  const contact = useContacts()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setStatus = status => dispatch({ type: 'updateStatus', status })

  const updateFieldValue = field => event => {
    dispatch({ type: 'updateFieldValue', field, value: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setStatus('PENDING')
    console.log(state)
    setStatus('SUCCESS')

    // fetch('/api/booking', { method: 'POST', body: JSON.stringify(state) })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response)
    //     setStatus('SUCCESS')
    //   })
    //   .catch(error => {
    //     console.error(error)
    //     setStatus('ERROR')
    //   })
  }
  if (state.status === 'SUCCESS') {
    return (
      <BookingForm>
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <p tw="text-xl text-center block"> Hey, {state.name}, we saved your booking</p>
          <Button type="reset" onClick={() => dispatch({ type: 'reset' })}>
            Book More
          </Button>
        </div>
      </BookingForm>
    )
  }
  return (
    <>
      <div tw="pt-16" id="booking-section"></div>

      <BookingForm className={state.status === 'PENDING' ? 'form-pending' : ''}>
        {state.status === 'ERROR' && (
          <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <p tw="text-xl text-center block text-red-400"> Some error while sending .. Try again {state.name}</p>
          </div>
        )}

        <div tw="flex-1 px-2 lg:px-10 m-auto lg:px-32">
          <h1 tw="font-bold pb-10">
            Have an idea? <br /> Tell us about it!
          </h1>

          <p tw="flex pt-5 items-center">
            <svg tw="mr-5" width="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="50" height="32" rx="4" fill="#F6F1FD" stroke="#413973" strokeWidth="3" />
              <path
                d="M49.5783 32.2395C50.2851 32.8429 49.8583 34 48.929 34L5.4307 34C4.50134 34 4.07459 32.8429 4.78138 32.2395L25.8812 14.2246C26.6292 13.5859 27.7305 13.5859 28.4785 14.2246L49.5783 32.2395Z"
                fill="white"
                stroke="#413973"
                strokeWidth="3"
              />
              <path
                d="M4.76355 3.75814C4.06033 3.15329 4.48808 2 5.41564 2H48.9139C49.845 2 50.2708 3.1608 49.5604 3.76286L28.3027 21.7801C27.5524 22.416 26.4511 22.412 25.7054 21.7707L4.76355 3.75814Z"
                fill="#FAFAFB"
                stroke="#413973"
                strokeWidth="3"
              />
            </svg>
            {contact.email}
          </p>

          <p tw="flex pt-5 items-center">
            <svg height="36" tw="mr-8" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="28" height="46" rx="4" fill="#F6F1FD" stroke="#413973" strokeWidth="3" />
              <rect x="7" y="8" width="18" height="23" fill="white" />
              <circle cx="16" cy="40" r="3" fill="#413973" />
            </svg>
            {contact.phone}
          </p>
          <p tw="flex pt-5 items-center">
            <svg height="36" tw="mr-8" viewBox="0 0 28 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.5 14C26.5 15.6724 25.9655 17.9652 25.0099 20.6307C24.065 23.2661 22.752 26.1486 21.2936 28.9585C18.8443 33.6779 16.0534 38.0637 14.0166 40.6574C12.1694 38.2248 9.42637 33.905 6.95259 29.2013C5.451 26.3461 4.07511 23.399 3.0784 20.7094C2.06876 17.985 1.5 15.6595 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14Z"
                fill="#F6F1FD"
                stroke="#413973"
                strokeWidth="3"
              />
              <circle cx="14" cy="15" r="5" fill="#413973" />
            </svg>
            {contact.address}
          </p>
        </div>
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
          <TextArea
            required
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            onChange={updateFieldValue('message')}
          />
          <Button type="submit">Submit</Button>
        </form>
      </BookingForm>
    </>
  )
}
