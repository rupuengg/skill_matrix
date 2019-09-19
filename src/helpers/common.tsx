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

const reqOptionsUpload = (url: string, type: string, body: any = undefined) => {
  const token = localStorage.getItem('token');

  // Make headers
  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");
  // headers.append("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
  headers.append("Authorization", `Bearer ${token}`);

  // Init
  let init: {
    method: string,
    headers: Headers,
    body: string
  } = {
    method: type,
    headers: headers,
    body: body
  };

  // Make Request
  return new Request(url, init);
};

const baseUrl = (filename: string) => {
  return "http://localhost:8080/" + filename;
};

export {
  reqOptionsWithout,
  reqOptions,
  reqOptionsUpload,
  baseUrl
};