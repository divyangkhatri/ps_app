import { SET_USER_DATA } from '../actions/user';

const initialState = {
  userData: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
