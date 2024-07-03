import { instance } from "./axios";

export const configAuth = () => {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
  };
  
export const config = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export const apiPost = (url, body, isAuth = false) => {
  let headers;
  if (isAuth == false) headers = config();
  if (isAuth == true) headers = configAuth();

  const response = instance
    .post(url, body, {
      headers: headers,
    })
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return err.response;
    });
  return response;
};

export const apiPut = (url, data, isAuth = false) => {
  let headers;
  if (isAuth == false) headers = config();
  if (isAuth == true) headers = configAuth();

  const response = instance
    .put(url, data, {
      headers: headers,
    })
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return err.response;
    });

  return response;
};

export const apiGet = (url, data, isAuth = false) => {
  let headers;
  if (isAuth == false) headers = config();
  if (isAuth == true) headers = configAuth();

  const response = instance
    .get(url, { params: data, headers: headers })
    .then((response) => response)
    .catch((err) => {
      console.log(err);
      return err.response;
    });

  return response;
};

export const apiDeletes = (url, isAuth = false) => {
  let headers;
  if (isAuth == false) headers = config();
  if (isAuth == true) headers = configAuth();

  const response = instance
    .delete(url, {
      headers: headers,
    })
    .then((response) => response)
    .catch((err) => {
      return err;
    });
  return response;
};

