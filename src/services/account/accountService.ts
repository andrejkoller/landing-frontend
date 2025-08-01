let loginStatus = false;

if (typeof window !== "undefined") {
  loginStatus = localStorage.getItem("isLoggedIn") === "true";
}

export const accountService = {
  isLoggedIn,
  login,
  logout,
};

function isLoggedIn(): boolean {
  return loginStatus;
}

function login(): void {
  loginStatus = true;
  if (typeof window !== "undefined") {
    localStorage.setItem("isLoggedIn", "true");
  }
}

function logout(): void {
  loginStatus = false;
  if (typeof window !== "undefined") {
    localStorage.removeItem("isLoggedIn");
  }
}
