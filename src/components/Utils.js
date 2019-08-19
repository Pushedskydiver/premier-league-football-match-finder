const apiValue = '64ec5fbc22msh6cdc0762a2c3439p103074jsn89f2b5f63a62';
const headers = { headers: { 'x-rapidapi-key': apiValue } };

export const fetchData = async api => {
  const response = await fetch(api, headers);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body.api;
};
