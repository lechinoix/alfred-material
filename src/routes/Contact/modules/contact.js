import { Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function setContactId (value = '') {
  return {
    type : CONTACT_SUBMIT,
    id : value
  }
}

export const actions = {
  setContactId
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTACT_SUBMIT] : (state, { id }) => {
    return state
    .set('id', id)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = Map({
  id: ''
})
export default function contactReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
