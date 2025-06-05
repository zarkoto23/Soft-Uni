export function getToken() {
  return localStorage.getItem("token");
}

export function getUserId() {
  return localStorage.getItem("userId");
}

export function setUserData(userData) {
  localStorage.setItem("token", userData.accessToken);
  localStorage.setItem("userId", userData.userData._id);
}

export function removeUserData() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
}
