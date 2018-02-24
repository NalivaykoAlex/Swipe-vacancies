const initialState = {
  switchTable:false
}


export default function switchTable(state = initialState, action) {
  if (action.type === 'SWITCH_TABLE') {
    return {
      ...state, 
      switchTable:action.switchTable
    }
  }
  return state
}
