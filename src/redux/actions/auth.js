import axios from '~/utilsjs/axios'

export const signIn = ({ email, password, onSuccess }) => async (dispatch, getState) => {
  const { form } = getState()
  let res, token
  try {
    res = await axios.post('/api/auth/user/', {
      email,
      password,
    })
    token = res.data.token
    res = await axios.get('/api/user/', {
      headers: {
        'Authorization': 'JWT ' + token
      },
    })
  } catch (e) {
    console.log('error: ', e)
    form.SignInForm.errors.denied = true
    return
  }
  dispatch({
    type: 'sign',
    email,
    name: res.data.name,
    token,
    id: res.data.id,
  })
  onSuccess()
}

export const refreshToken = ({ onFailed }) => async (dispatch, getState) => {
  const { auth } = getState()
  let res, token
  try {
    res = await axios.post('/api/auth/refresh/', {
      token: auth.token
    })
    token = res.data.token
    res = await axios.get('/api/user/', {
      headers: {
        'Authorization': 'JWT ' + token
      },
    })
  } catch (e) {
    console.log('auth error: ', e)
    dispatch({type: 'signOut'})
    if (e.response && (e.response.status == 400 || e.response.status == 401)) {
      onFailed()
    }
    return
  }
  dispatch({
    type: 'tokenUpdate',
    token
  })
}

export const signOut = () => async (dispatch) => {
  dispatch({ type: 'signOut' })
}