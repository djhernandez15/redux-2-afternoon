import axios from "axios";

let initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
};

//Action Types
export const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA";
export const ADD_PURCHASE = "ADD_PURCHASE";
export const REMOVE_PURCHASE = "REMOVE_PURCHASE";

//Action Creator
export function requestBudgetData() {
  return {
    type: REQUEST_BUDGET_DATA,
    payload: axios.get("/api/budget-data").then(res => res.data)
  };
}

export function addPurchase(price, description, category) {
  return {
    type: ADD_PURCHASE,
    payload: axios
      .post("/api/budget-data/purchase", { price, description, category })
      .then(res => res.data)
  };
}

export function removePurchase() {
  return {
    type: REMOVE_PURCHASE,
    payload: axios.delete("/api/budget-data/purchase/:id").then(res => res.data)
  };
}

export default function budgetReducer(state = initialState, action) {
  switch (action.type) {
    case `${REMOVE_PURCHASE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${REMOVE_PURCHASE}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      };
    case `${ADD_PURCHASE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_PURCHASE}_FULFILLED`:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      };
    case `${REQUEST_BUDGET_DATA}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${REQUEST_BUDGET_DATA}_FULFILLED`:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
}
