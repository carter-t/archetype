import axios from 'axios';

const initialState = {
  actionType: {}
}

const ACTION_TYPE = 'ACTION_TYPE';

export default function reducerOne(state=initialState, action) {
  switch(action.type) {

    case ACTION_TYPE:
      return Object.assign({}, state, {actionType: action.payload});

    default:
      return state;
  }
}

export function updateActionType() {
  return {
    type: ACTION_TYPE,
    payload: axios.get('http://www...url')
  }
}