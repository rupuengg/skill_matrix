// import { OptionInterface } from '../interfaces/option.interface';

const reqOptions = (url: string, type: string, token: any, body: any = undefined) => {
  // Make headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Content-type", "application/json;charset=utf-8");
  headers.append("Authorization", `Bearer ${token}`);

  // Init
  let init: {
    method: string,
    headers: Headers,
    // mode: string,
    // cache: string,
    body: string
  } = {
    method: type,
    headers: headers,
    // mode: 'cors',
    // cache: 'default',
    body: JSON.stringify(body)
  };

  // Make Request
  return new Request(url, init);

  // const options: OptionInterface = {
  //   method,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-type": "application/json; charset=UTF-8",
  //     "Authorization": `Bearer ${token}`
  //   },
  //   mode: 'cors',
  //   cache: 'default'
  // };

  // // Set body
  // if (data) {
  //   options['body'] = JSON.stringify(data);
  // }
};

export {
  reqOptions
};