export function setToken(token) {
  return {
    type: "SET_TOKEN",
    data: token,
  }
}

export function logout() {
  return {
    type: "LOGOUT",
  }
}