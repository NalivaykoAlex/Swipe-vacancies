const initialState = {
  initialized: false,
  loading: true,
  categories: [],
  vacancies: [],
  count: null,
  limit: null,
  offset: null,
  error:null
}


export default function vacancies(state = initialState, action) {
  if (action.type === 'FETCH_DATA') {
    return {
      ...state,
      categories: [ action.categories],
      vacancies: [...state.vacancies, action.vacancies],
      initialized: action.initialized,
      loading: action.loading,
      count: action.count,
      limit: action.limit,
      offset: action.offset || 100,
      error:action.error
    }
  }
  return state
}
