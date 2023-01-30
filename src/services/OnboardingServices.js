import requests from './httpJJmallServices';

const OnboardingServices = {
  
  userLogin(body) {
    let headers={"Accept": "application/json","Content-Type":"application/json"};
    return requests.post('/auth/local', body,headers);
  },

  verifyEmailAddress(body) {
    return requests.post('/auth/send-email-confirmation', body);
  },

  // userRegister(token, body) {
  //   return requests.post(`/auth/local/register/${token}`, body);
  // },
  userRegister(body) {
    let headers={"Accept": "application/json","Content-Type":"application/json"};
    return requests.post('/auth/local/register', body,headers);
  },
  signUpWithProvider(body) {
    return requests.post('/auth/local/register', body);
  },
  addProduct(body) {
    let headers={"Accept": "application/json","Content-Type":"application/json"};
    return requests.post('/products', body,headers);
  },
  addPerson(body) {
    return requests.post('/peoples', body);
  },
  addAnswer(body) {
    return requests.post('/answers', body);
  },
  forgetPassword(body) {
    return requests.put('/auth/forgot-password', body);
  },

  resetPassword(body) {
    return requests.put('/auth/reset-password', body);
  },

  changePassword(body) {
    return requests.post('/user/change-password', body);
  },

  updateUser(id, body) {
    return requests.put(`/users/${id}`, body);
  },
};

export default OnboardingServices;