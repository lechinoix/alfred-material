// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'

// ------------------------------------
// Actions
// ------------------------------------
export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU
  }
}

export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TOGGLE_MENU] : (state) => {
    return { opened: !state.opened }
  },
  [CLOSE_MENU] : (state) => {
    return { opened: false }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  opened: false
}
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
