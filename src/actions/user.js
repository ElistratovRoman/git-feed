import axios from 'axios'
import cookies from 'js-cookie'
import * as types from 'constants/user'
import config from 'config'


export const checkAuth = () => (dispatch) => {
  dispatch({ type: types.USER_CHECK_AUTH_START })

  let token = cookies.get('git_feeds_token')

  if (token) {
    let req = {
      url: 'https://api.github.com/user',
      method: 'get',
      params: {
        access_token: token
      }
    }

    axios(req)
      .then((response) =>
        dispatch({ type: types.USER_CHECK_AUTH_SUCCESS, data: response.data })
      )
      .catch((errors) =>
        dispatch({ type: types.USER_CHECK_AUTH_FAILED })
      )
  }
  else {
    dispatch({ type: types.USER_CHECK_AUTH_FAILED })
  }
}


export const getToken = (code) => (dispatch) => {
  let req = {
    url: config.get_token_link,
    method: 'post',
    params: {
      client_id: config.client_id,
      client_secret: config.client_secret,
      code: code,
      redirect_uri: window.location.href
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  axios(req)
    .then((response) => {
      if (response.status == 200 && response.data.access_token) {
        cookies.set('git_feeds_token', response.data.access_token)
        window.location = window.location.origin
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// TODO request to the api to delete a session
export const signOut = () => (dispatch) => {
  dispatch({ type: 'USER_SIGN_OUT_START' })
  cookies.remove('git_feeds_token')
  dispatch({ type: 'USER_SIGN_OUT_SUCCESS' })
  // dispatch({ type: 'USER_SIGN_OUT_FAILED' })
}