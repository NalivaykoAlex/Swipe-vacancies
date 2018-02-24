import model from '../constants/modelAPI'

export const api = 'https://api.zp.ru/v1/vacancies/?'
const url = `${api}average_salary=${model.average_salary}&categories_facets=${model.categories_facets}&geo_id=${model.geo_id}&limit=${model.limit}&highligh=${model.highlight}&period=${model.period}&search_type=${model.search_type}`

export default url