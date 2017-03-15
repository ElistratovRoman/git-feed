import * as types from 'constants/user'


const initialState = {
  isFetching  : false,
  currentUser : null,
  errors      : null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case types.USER_CHECK_AUTH_START:
      return {
        ...state,
        isFetching: true
      }

    case types.USER_CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: action.data
      }

    case types.USER_CHECK_AUTH_FAILED:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      }

    case types.USER_SIGN_OUT_START:
      return {
        ...state,
        isFetching: true
      }

    case types.USER_SIGN_OUT_SUCCESS:
      return initialState

    // case types.USER_SIGN_OUT_FAILED:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     errors: action.errors
    //   }

    default:
      return state
  }
}