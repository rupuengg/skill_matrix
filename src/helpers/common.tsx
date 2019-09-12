const reqOptions = (method: string, token: any) => {
  return {
    method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": `Bearer ${token}`
    },
    mode: 'cors',
    cache: 'default'
  }
};

export {
  reqOptions
};