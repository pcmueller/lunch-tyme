// const API_KEY = process.env.REACT_APP_BR_MAPS_API_KEY;

const baseURL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';

export const fetchRestaurants = async() => {
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