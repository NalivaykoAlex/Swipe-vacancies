import * as qs from 'qs'

export async function fetchAPI(url, param='') {
  const params = qs.stringify(param)
  const response = await fetch(`${url}${params}`)
  if (response.status >= 200 && response.status < 300) {
    let data = await response.text()
    try {
      data = JSON.parse(data)
    } catch (error) {
      console.log(error, 'error')
    }
    return data
  }
}

// export default async (url, param = "") => {
//    const params = qs.stringify(param);
//   try {
//     const response = await fetch(`${url}${params}`)
//         .then(response => response.json());

//         return response;
//   } catch (e) {
//     return false;
//   }
// };