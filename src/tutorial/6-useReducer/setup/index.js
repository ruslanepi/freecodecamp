import React, { useState, useReducer, useRef, useEffect } from 'react'
import { data } from '../../../data'
import Modal from './modal'
import { reducer } from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const refContainer = useRef(null)

  useEffect(() => {
    dispatch({ type: 'PAGE_LOADED', payload: data })
    refContainer.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newPerson = {
        id: new Date().getTime().toString(),
        name,
      }
      dispatch({ type: 'ADD_PERSON', payload: newPerson })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            ref={refContainer}
          />
          <button className='btn'>add person </button>
        </div>
      </form>

      {state.people.map((person) => (
        <div className='item' key={person.id} id={person.id}>
          <span>{person.name}</span>
          <div
            className='button'
            onClick={() =>
              dispatch({ type: 'REMOVE_PERSON', payload: person.id })
            }
          >
            remove person
          </div>
        </div>
      ))}
    </>
  )
}

export default Index
