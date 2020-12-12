import React, { useReducer } from 'react'
import tw, { styled } from 'twin.macro'
import { keyframes } from '@emotion/core'
import colors from './colors'

interface Action {
  type: string
  field?: string
  value?: string
  status?: string
}

interface FormState {
  passkey: string
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
  ${tw` p-8 m-0 w-screen`}

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

const Title = styled.h2`
  ${tw`py-3 m-0  text-center font-bold `}
`
const INITIAL_STATE: FormState = {
  passkey: '',
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

export default function Building(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setStatus = status => dispatch({ type: 'updateStatus', status })

  const updateFieldValue = field => event => {
    dispatch({ type: 'updateFieldValue', field, value: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    setStatus('PENDING')

    fetch('/api/builds', { method: 'POST', body: JSON.stringify(state) })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        setStatus('SUCCESS')
      })
      .catch(() => {
        // console.error(error)
        setStatus('ERROR')
      })
  }
  if (state.status === 'SUCCESS') {
    return (
      <ContactForm>
        <div>
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

          <Title>Build triggered successfully!</Title>
        </div>
      </ContactForm>
    )
  }
  return (
    <>
      <ContactForm className={state.status === 'PENDING' ? 'form-pending' : ''}>
        {state.status === 'ERROR' && (
          <div>
            <p tw="text-xl text-center block text-red-400"> Some error while sending .. </p>
          </div>
        )}

        <form name="Booking" onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <Input
            required
            type="text"
            id="passkey"
            name="passkey"
            placeholder="Passkey"
            value={state.passkey}
            onChange={updateFieldValue('passkey')}
          />
          <Button type="submit">Deploy</Button>
        </form>
      </ContactForm>
    </>
  )
}
