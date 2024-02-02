export const isAuthenticated = (state) => {
  if (state.auth.auth.accessToken) return true;
  return false;
};

export const adminPrevilage = (state) => {
  if (state.auth.auth.user && state.auth.auth.user.role === "client_admin") {
    return "client";
  }
};