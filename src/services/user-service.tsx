const userAuthentication = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user = {
        username,
        password
      };
      resolve(user);
      localStorage.setItem('token', JSON.stringify(user));
    }, 2000);
  });
};

const userService = {
  userAuthentication
};

export default userService;