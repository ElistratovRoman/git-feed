import axios from 'axios'
import cookies from 'js-cookie'
import * as types from 'constants/feeds'
import config from 'config'


export const loadFeeds = (username, id, page) => (dispatch) => {
  dispatch({ type: types.LOAD_FEEDS_START })

  let token = cookies.get('git_feeds_token')

  let req = {
    url: `https://api.github.com/users/${username}/events`,
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Authorization': `token ${token}`
    }
  }

  axios(req)
    .then((response) =>
      dispatch({ type: types.LOAD_FEEDS_SUCCESS, data: response.data })
    )
    .catch((errors) =>
      dispatch({ type: types.LOAD_FEEDS_FAILED, errors: errors })
    )
}