const userAuthentication = async (email: string, password: string) => {
  const options: object = {
    method: 'POST',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    mode: 'cors',
    cache: 'default',
    body: `email=${email}&password=${password}`
  };
  return fetch('http://localhost:8080/api/1.0/auth', options)
    .then(res => res.json())
    .then(res => {
      return res.data;
    })
};

const userService = {
  userAuthentication
};

export default userService;