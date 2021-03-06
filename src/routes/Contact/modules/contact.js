import { Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const CONTACT_SUBMIT = 'CONTACT_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function setContact ({ id, name }) {
  return {
    type : CONTACT_SUBMIT,
    id : id,
    name : name
  }
}

export const actions = {
  setContact
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CONTACT_SUBMIT] : (state, { id, name }) => {
    return state
    .set('id', id)
    .set('name', name)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = Map({
  id: '',
  name: ''
})
export default function contactReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
