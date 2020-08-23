export function getLoginConfig({ email, password }){

  //Data from the form
  const userData = { email, password };

  //create string for axios
  const axiosData = Object.keys(userData).map((key) =>( encodeURIComponent(key) + '=' + encodeURIComponent(userData[key]))).join('&');

  //assemble the Axios Config
  const loginConfig = {
    url: 'http://localhost:8000/api/login',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'content-Type': 'application/json'
     },
    data: axiosData,
    responseType: 'json',
  }

  console.log('axios data', axiosData);
  console.log('login data', loginConfig);

  return loginConfig;

}
