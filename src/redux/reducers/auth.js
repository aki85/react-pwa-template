const initialAppState = {
  id: '',
  email: '',
  name: '',
  token: '',
  AuthorizedOptions: {},
}

const auth = (state = initialAppState, action) => {
  if (action.type === 'sign') {
    return {
      ...state,
      email: action.email,
      name: action.name,
      token: action.token,
      AuthorizedOptions: { headers: { 'Authorization': 'JWT ' + action.token } },
      id: action.id,
    }
  } else if (action.type === 'signOut'){
    return initialAppState
  } else if (action.type === 'tokenUpdate'){
    return {
      ...state,
      token: action.token,
      AuthorizedOptions: { headers: { 'Authorization': 'JWT ' + action.token } },
    }
  } else {
    return state
  }
}

export default auth