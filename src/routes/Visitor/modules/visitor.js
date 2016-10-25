import { Map } from 'immutable'

// ------------------------------------
// Constants
// ------------------------------------
export const VISITOR_SUBMIT = 'VISITOR_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function setName (value = '') {
  return {
    type    : VISITOR_SUBMIT,
    name : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of VISITOR_DOUBLE and let the
    reducer take care of this logic.  */

export const actions = {
  setName
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VISITOR_SUBMIT] : (state, { name }) => {
    return state
    .set('name', name)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = Map({
  name: ''
})
export default function visitorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
