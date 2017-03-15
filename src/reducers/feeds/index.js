import * as types from 'constants/feeds'


const initialState = {
  list       : [],
  errors     : {},
  isFetching : false
}

export default (state=initialState, action) => {
  switch(action.type) {
    case types.LOAD_FEEDS_START:
      return {
        ...state,
        isFetching: true
      }

    case types.LOAD_FEEDS_SUCCESS:
      return {
        ...state,
        list: action.data,
        isFetching: false
      }

    case types.LOAD_FEEDS_FAILED:
      return {
        ...state,
        errors: action.errors,
        isFetching: false
      }

    default:
      return state
  }
}