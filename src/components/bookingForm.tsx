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
  name: string
  phone: string
  date: string
  time: string
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
  ${tw` p-8 mt-16`}

  background-color:${colors.accent};
  color: ${colors.base};

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
  ${tw`mb-8 mt-12 px-10 py-3 rounded-md text-lg w-full font-bold`}
  background-color:${colors.baseLight};
  color: ${colors.accent};
`
const Input = styled.input`
  ${tw`w-full py-2 px-3 appearance-none mb-4 text-base`}
  background-color:${colors.accent};
  border-bottom: solid ${colors.base} 1px;
`

const Title = styled.h2`
  ${tw`py-3 m-0  text-center font-bold `}
`

const curr = new Date()
const currDate = curr.toISOString().substr(0, 10)
const currTime = curr.toISOString().match(/(\d{2}:){1}\d{2}/)[0]
console.log(currDate, currTime)

const INITIAL_STATE: FormState = {
  name: '',
  phone: '',
  date: currDate,
  time: currTime,
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
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const setStatus = status => dispatch({ type: 'updateStatus', status })

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
    <BookingForm id="booking-section" className={state.status === 'PENDING' ? 'form-pending' : ''}>
      {state.status === 'ERROR' && (
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
          <p tw="text-xl text-center block text-red-400"> Some error while sending .. Try again {state.name}</p>
        </div>
      )}
      <Title>Book a free Consultation</Title>
      <form name="Booking" onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
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
        <label htmlFor="phone"></label>
        <Input
          required
          type="tel"
          id="phone"
          name="phone"
          maxLength={Number.parseInt('10')}
          placeholder="Phone"
          value={state.phone}
          onChange={updateFieldValue('phone')}
        />
        <label htmlFor="date"></label>
        <Input
          required
          type="date"
          id="date"
          name="date"
          placeholder="Date"
          min={currDate}
          value={state.date}
          onChange={updateFieldValue('date')}
        />
        <label htmlFor="time"></label>
        <Input
          required
          type="time"
          id="time"
          name="time"
          placeholder="Time"
          min={currTime}
          value={state.time}
          onChange={updateFieldValue('time')}
        />
        <Button type="submit">Book Now</Button>
      </form>
    </BookingForm>
  )
}
