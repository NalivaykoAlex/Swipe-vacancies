import { fetchAPI } from '../utils/fetchAPI'
import url, { api } from '../constants/urls'


export const FetchData = () => async dispatch => {
  try {
    const response = await fetchAPI(url)
    const { metadata: { categories_facets, resultset: { count, limit } }, vacancies } = response
    dispatch({ type: 'FETCH_DATA', categories: categories_facets, vacancies, initialized: true, loading: false, count, limit })
  }
  catch (error) {
    dispatch({ type: 'FETCH_DATA', error, initialized: false, loading: true })
  }
}

export const LoadMore = () => async (dispatch, getState) => {
  const { data: { offset: page } } = getState()
  try {
    const response = await fetchAPI(api, {
      average_salary: true,
      categories_facets: true,
      geo_id: 826,
      highlight: true,
      period: 'today',
      limit: 100,
      offset:`${100 + page}`,
      search_type: 'fullThrottle'
    })
    const { metadata: { categories_facets, resultset: { count, limit, offset } }, vacancies } = response
    dispatch({ type: 'FETCH_DATA', categories: categories_facets, vacancies, initialized: true, loading: false, count, limit, offset })
  } catch (error) {
    dispatch({ type: 'FETCH_DATA', error, initialized: false, loading: true })
  }
}