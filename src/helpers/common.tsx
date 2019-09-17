// import { OptionInterface } from '../interfaces/option.interface';

const reqOptionsWithout = (url: string, type: string, body: any = undefined) => {
  // Make headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Content-type", "application/json;charset=utf-8");

  // Init
  let init: {
    method: string,
    headers: Headers,
    body: string
  } = {
    method: type,
    headers: headers,
    body: JSON.stringify(body)
  };

  // Make Request
  return new Request(url, init);
};

const reqOptions = (url: string, type: string, body: any = undefined) => {
  const token = localStorage.getItem('token');

  // Make headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Content-type", "application/json;charset=utf-8");
  headers.append("Authorization", `Bearer ${token}`);

  // Init
  let init: {
    method: string,
    headers: Headers,
    body: string
  } = {
    method: type,
    headers: headers,
    body: JSON.stringify(body)
  };

  // Make Request
  return new Request(url, init);
};

export {
  reqOptionsWithout,
  reqOptions
};