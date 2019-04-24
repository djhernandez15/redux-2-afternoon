import axios from "axios";

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};
//Action Types
export const REQUEST_USER_DATA = "REQUEST_USER_DATA";

//Action Creator
export function requestUserData() {
  return {
    type: REQUEST_USER_DATA,
    payload: axios.get("/auth/user-data").then(res => res.data)
  };
}




export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_USER_DATA}_FULFILLED`:
      return {
        ...state,
        email: action.payload.user.email,
        firstName: action.payload.user.firstName,
        lastName: action.payload.user.lastName
      };
    default:
      return state;
  }
}
