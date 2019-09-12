const userService = {
  userAuthentication: async (email: string, password: string) => {
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
      .then(res => {
        return res.json();
      })
      .catch(err => {
        console.log('S Error', err);
      });
  },
  userLogout: async () => {
    const token = localStorage.getItem('token');
    const options: object = {
      method: 'DELETE',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${token}`
      },
      mode: 'cors',
      cache: 'default'
    };
    return fetch('http://localhost:8080/api/1.0/auth', options)
      .then(res => res.json())
      .then(res => {
        return res.data;
      });
  }
};

export default userService;