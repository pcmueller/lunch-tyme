const baseURL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

export const fetchRestaurants = async (id) => {
  return fetch(`${baseURL}`)
    .then(response => {
      handleErrors(response)
      return response.json()
    })
}

const handleErrors = (response) => {
  if (!response.ok) {
    console.log(response);
    throw new Error()
  }
}