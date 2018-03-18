import { fetchAPI } from "../utils/fetchAPI";

export const FetchData = () => async dispatch => {
  try {
    const response = await fetchAPI('https://api.zp.ru/v1/vacancies/?',{
      average_salary: true,
      categories_facets: true,
      geo_id: 826,
      highlight: true,
      period: 'today',
      limit: 25,
      // offset:`${100 + page}`,
      search_type: 'fullThrottle'
    })
    const { vacancies } = response
    dispatch({ type: 'FETCH_DATA', vacancies, initialized: true, loading: false })
  } catch(error) {
    dispatch({type: "FETCH_DATA", error, initialized: false, loading: true });
  }
}

export const PushDislikes = dislikes => async dispatch => {
  dispatch({ type: "PUSH_DISLIKES", dislikes });
};

export const Pushlikes = likes => async dispatch => {
  dispatch({ type: "PUSH_LIKES", likes });
};
