export const reducer = (state, action) => {
  if (action.type === 'PAGE_LOADED') {
    return {
      ...state,
      people: action.payload,
    }
  }

  if (action.type === 'ADD_PERSON') {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: 'person added',
    }
  }

  if (action.type === 'REMOVE_PERSON') {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload
    })

    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'person removed',
    }
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'empty value',
    }
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: '',
    }
  }
  throw new Error('no matching action type')
}
